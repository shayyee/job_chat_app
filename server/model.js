/**
 * Created by lenovo on 2018/3/7.
 */
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