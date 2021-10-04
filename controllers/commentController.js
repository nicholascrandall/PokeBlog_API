const express = require('express')
const comment = express.Router()
const CommentModel = require('../models/commentModel')
// const commentSeed = require('../models/commentSeed')

// index for a specific blog's comments
comment.get('/:blogid', (req, res) => {
    CommentModel.find({blogid: req.params.blogid}, (error, foundComments) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(foundComments)
    })
})

module.exports = comment