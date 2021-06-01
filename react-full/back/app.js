const express = require('express');
const cors = require('cors');
const session = require('express-session')
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const cookieParser = require('cookie-parser')
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
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

app.use(morgan('dev'));
app.use(cors({
  origin: ['http://192.168.0.9:3001', 'http://localhost:3001'], // 'https://yourdomain.com' or true해도 가능
  credentials: true, 
}))
app.use('/', express.static(path.join(__dirname, 'uploads'))); //프론트에서 '/' 로 접근하게한다.
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

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
})
