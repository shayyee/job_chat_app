/**
 * Created by lenovo on 2018/3/6.
 */
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const app = express()

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(cookieParser())
app.use(bodyParser.json()) // 解析post过来的参数
app.use('/user', userRouter)
app.listen(9003, function () {
  console.log('Node app start on port 9003')
})