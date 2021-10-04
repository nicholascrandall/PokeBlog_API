const express = require('express')
const comment = express.Router()
const CommentModel = require('../models/commentModel')
// const commentSeed = require('../models/commentSeed')

// get ALL comments
comment.get('/', (req, res) => {
    CommentModel.find({}, (err, foundComments, next) => {
        if(err) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json({data: foundComments})
    })
})

// index for a specific blog's comments
comment.get('/:blogid', (req, res) => {
    CommentModel.find({blogid: req.params.blogid}, (error, foundComments) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(foundComments)
    })
})

// create
comment.post('/', (req, res) => {
    CommentModel.create(req.body, (error, createdComment) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(createdComment)
    })
})

// delete
comment.delete(':id', (req, res) => {
    CommentModel.findByIdAndDelete(req.params.id, (error, deletedComment) => {
        if (error) {
            req.status(400).json({ error: error.message })
        }
        else if (deletedComment === null) {
            res.status(404).json({ message: "Comment Not Found" })
        }
        res.status(200).json({ message: "Comment deleted successfully" })
    })
})

// update
comment.put('/:id', (req, res) => {
    CommentModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
        if(error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(updatedComment)
    })
})

module.exports = comment