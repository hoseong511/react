const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);    
    next(error);
  }
});

router.post('/', isNotLoggedIn, async (req, res) => { // POST /user/
  try {
    console.log(req.body);
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 이메일입니다.')
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader('Access-Control-Allow-Origin', '*'); 알려준 header방식으로 안되는디요
    res.status(201).send('ok!');
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});


router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason); // 401 허가 된지 않음
    }
    return req.login(user, async (loginErr) => { // passport 에서 자체적으로 로그인 한다.
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
        }, {
          model: User,
          as: 'Followings',
        }, {
          model: User,
          as: 'Followers',
        }]
      })
      return res.status(200).json(fullUserWithoutPassword)
    })
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    const result = await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    console.log(result);
    
    res.status(200).json({ nickname: req.body.nickname, id: req.user.id })
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
  try {
    console.log(req.params.userId);
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) })
  } catch (error) {
    console.error(error);
    next(error)
  }
});

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) })
  } catch (error) {
    console.error(error);
    next(error)
  }
});
router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    const followers = await user.getFollowers();
    res.status(200).json(followers)
  } catch (error) {
    console.error(error);
    next(error)
  }
});
router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /followings
  try {
    const user = await User.findOne({ where: { id: req.user.id }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    const followings = await user.getFollowings();
    res.status(200).json(followings)
  } catch (error) {
    console.error(error);
    next(error)
  }
});
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /followings
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('없는 계정입니다.!')
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({UserId: parseInt(req.params.userId, 10)})
  } catch (error) {
    console.error(error);
    next(error)
  }
});


module.exports = router;