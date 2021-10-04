const express = require('express')
const blog = express.Router()
const BlogModel = require('../models/blogModel')

//index
blog.get('/', (req, res) => {
    res.send("index route")
})

//create
blog.post('/', (req, res) => {
    BlogModel.create(req.body, (error, createdBlog) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(createdBlog)
    })
})

module.exports = blog