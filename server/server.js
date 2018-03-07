/**
 * Created by lenovo on 2018/3/6.
 */
const express = require('express')
const app = express()

const mongoose = require('mongoose')
// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})
app.get('/', function (req, res) {
  res.send('<h1>Hello</h1>')
})
app.listen(3001, function () {
  console.log('Node app start on port 3001')
})