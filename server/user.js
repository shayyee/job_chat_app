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
    const userModel = new User({user,identity,pwd:md5Pwd(pwd)})
    userModel.save(function (err,doc) {
      if(err) {
        return res.json({code:1, msg:'数据库操作失败'})
      }
      const {user,type,_id} = doc
      res.cookie('userid',_id)
      return res.json({code: 0, data:{user,type,_id}})
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
  // 用户没有cookie
  if(!userid) {
    res.json({code:1})
  }
  // 用户有cookie
  User.findOne({_id:userid}, _filter, function (err,doc) {
    if(err) {
      return res.json({code:1, msg:'数据库操作失败'})
    }
    if(doc) {
      // let data = doc;
      // if(doc.identity === 1) {
      //   data = {doc,redirectTo: '/bossinfo'}
      // }
      // if(doc.identity === 2) {
      //   data = {doc,redirectTo: '/userinfo'}
      // }
      return res.json({code:0, data:doc})
    }
  })
})
Router.post('/update', function (req, res) {
  let {userid} = req.cookies
  if(!userid) {
    return res.json({code:1})
  }
  const body = req.body
  User.findByIdAndUpdate(userid,body,function (err, doc) {
    const data = Object.assign({},{
      user: doc.user,
      identity: doc.identity,
    },body)
    return res.json({code:0,data})
  })
})
function md5Pwd(pwd) {
  let salt = 'job_chat_app_!@#$%SHAYYEE^&*()'
  return utility.md5(utility.md5(pwd + salt))
}

module.exports = Router