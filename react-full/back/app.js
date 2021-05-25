const express = require('express');
const cors = require('cors');
const session = require('express-session')
const passport = require('passport');
const dotenv = require('dotenv');

const cookieParser = require('cookie-parser')
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app =express();
db.sequelize.sync()
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch(console.error);
passportConfig();

app.use(cors({
  origin: true, // 'https://yourdomain.com' or true해도 가능
  credentials: true, 
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/api', (req, res) => {
  res.send('hello api');
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
})
/**
 * get 가져오기
 * post 생성하기
 * put
 * delete
 * patch
 * option
 */