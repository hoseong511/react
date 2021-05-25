const express = require('express');
const bcrypt = require('bcrypt');
const { User, Post } = require('../models');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
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

router.post('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
})

router.post('/', async (req, res) => { // POST /user/
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

module.exports = router;