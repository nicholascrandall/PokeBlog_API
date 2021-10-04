const express = require('express')
const blog = express.Router()
const BlogModel = require('../models/blogModel')

//index
blog.get('/', (req, res) => {
    res.send("index route")
})


module.exports = blog