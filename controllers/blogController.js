const express = require('express')
const blog = express.Router()
const BlogModel = require('../models/blogModel')
const blogSeed = require('../models/blogSeed')

//index
blog.get('/', (req, res) => {
    BlogModel.find({}, (err, foundBlogs, next) => {
        if(err) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json({data: foundBlogs})
    })
})

//blog seeding
blog.get('/seed', (req, res) => {
    BlogModel.create(blogSeed, (err, newBlogs) => {
        if (err) {
            res.status(400).json({ err: err.message });
        }
        res.status(200).json({data: newBlogs})
    })
})

//show
blog.get('/:id', (req, res) => {
   BlogModel.findById(req.params.id, (error, foundBlog) => {
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