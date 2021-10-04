const express = require('express')
const blog = express.Router()
const BlogModel = require('../models/blogModel')

//index
blog.get('/', (req, res) => {
    BlogModel.find({}, (err, foundBlogs, next) => {
        if(err) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json({data: foundBlogs})
    })
})

//show
blog.get('/:name', (req, res) => {
   BlogModel.findOne({name: req.params.name}, (error, foundBlog) => {
       if (error) {
           res.status(400).json({ error: error.essage })
       }
       res.status(200).json({data: foundBlog})
   })
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