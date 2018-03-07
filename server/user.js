/**
 * Created by lenovo on 2018/3/7.
 */
const express = require('express')
const Router = express.Router()

Router.get('/info', function (req, res) {
  // 用户有没有cookie
 return res.json({code:1})
})

module.exports = Router