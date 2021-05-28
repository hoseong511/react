const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, Comment, Image, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' +new Date().getTime() + ext); // 파일이름 중복현상 해결
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024}, // 20MB // 서버를 거치지 않고 프론트에서 클라우드로 바로 올린다
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // POST /post
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g)
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
        where: { content: tag.slice(1).toLowerCase() },
       })));
       await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
         const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image})));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{ // 댓글 작성자
          model: User,
          attributes: ['id', 'nickname']
        }]
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname']
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id']
      }]
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.postId },
      UserId: req.user.id,
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) })
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => { // multer options array, single, none
  console.log(req.files);
  res.json(req.files.map((v) => v.filename ))
})

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post
  try { 
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    // console.log(comment);
    const responseComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }]
    }, )
    res.status(201).json(responseComment)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { // PATCH /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId }})
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.addLikers(req.user.id);
    res.json({ postId: post.id, UserId: req.user.id})
  } catch (error) {
    console.error(error);
    next(error);
  }
})
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId}})
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.removeLikers(req.user.id);
    res.json({ postId: post.id, UserId: req.user.id})
  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;