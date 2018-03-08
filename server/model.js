/**
 * Created by lenovo on 2018/3/7.
 */
const mongoose = require('mongoose')
// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/job-chat'
mongoose.connect(DB_URL)

// mongoose.connection.on('connected', function () {
//   console.log('mongo connect success')
// })
const models = {
  user: {
    user: {type: String, require: true},
    pwd: {type: String, require: true},
    identity: {type: Number, require: true},
    // 头像
    avatar: {type: String},
    //个人简介或职位简介
    desc: {type:String},
    // 职位名
    title: {type: String},
    // boss 所属公司和职位薪资
    company: {type: String},
    money: {type: String}
  },
  chat: {

  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}