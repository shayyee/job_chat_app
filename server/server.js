/**
 * Created by lenovo on 2018/3/6.
 */
const express = require('express')
const userRouter = require('./user')
const app = express();

app.use('/user', userRouter)
app.listen(3001, function () {
  console.log('Node app start on port 3001')
})