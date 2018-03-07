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
const User = mongoose.model('User', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))
app.get('/data', function (req, res) {
  User.findOne({}, function (err, doc) {
    if(!err) {
      res.json(doc)
    }
  })
})
app.listen(3001, function () {
  console.log('Node app start on port 3001')
})