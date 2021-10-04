const mongoose = require('mongoose')
const {Schema, model} = mongoose

const commentSchema = new Schema({
    username: {type: String, default: "Anonymous"},
    time: {type: Date, default: Date.now},
    content: String,
    blogid: {type: Schema.Types.ObjectId, ref: 'Blog'},
})

module.exports = model('Comment', commentSchema)