const passport = require('passport');
const bcrypt = require('bcrypt');
const { Strategy:localStrategy } = require('passport-local');
const { User } = require('../models');

module.exports = () => {
  passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({
        where: { email }
      });
      if (!user) { //클라이언트 에러
        return done(null, false, { reason: '존재하지 않는 사용자입니다.!'})
      }
      const result = await bcrypt.compare(password, user.password)
      if (result) { // 비번 일치
        return done(null, user);
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.'})
    } catch (error) {
      console.error(error);
      return done(error);      
    }
  }));
}
