/**
 * Created by lenovo on 2018/3/7.
 */
const express = require('express')
const utility = require('utility')
const Router = express.Router()
const model = require('./model')

const User = model.getModel('user');
const _filter = {'pwd': 0,'__v':0,}

Router.get('/list', function (req, res) {
 User.find({}, function (err, doc) {
   return res.json(doc)
 })
})

Router.post('/register', function (req, res) {
  console.log(req.body)
  let {user,pwd,identity} = req.body;
  User.findOne({user: user}, function (err,doc) {
    if(doc) {
      return res.json({code:1, msg:'该用户已存在'})
    }
    User.create({user,identity,pwd:md5Pwd(pwd)}, function (err, doc) {
      if(err) {
        return res.json({code:1, msg:'数据库操作失败'})
      }
      return res.json({code: 0})
    })
  })
})

Router.post('/login', function (req, res) {
  let {user,pwd} = req.body;
  User.findOne({user,pwd:md5Pwd(pwd)}, _filter, function (err,doc) {
    if(!doc) {
      return res.json({code:1, msg:'用户名或密码错误'})
    }
    res.cookie('userid', doc._id)
    return res.json({code:0,data:doc})
  })
})
Router.get('/info', function (req, res) {
  let {userid} = req.cookies
  console.log(userid)
  // 用户有没有cookie
  if(!userid) {
    res.json({code:1})
  }
  User.findOne({_id:userid}, _filter, function (err,doc) {
    if(err) {
      return res.json({code:1, msg:'数据库操作失败'})
    }
    if(doc) {
      return res.json({code:0, data:doc})
    }
  })
})

function md5Pwd(pwd) {
  let salt = 'job_chat_app_!@#$%SHAYYEE^&*()'
  return utility.md5(utility.md5(pwd + salt))
}

module.exports = Router