const mongoose = require('mongoose')
const {Schema, model} = mongoose

const blogSchema = new Schema({
    name: {type:String, default: "Anonymous PokeBlogger"},
    avatar: String,
    about: String,
    caughtPokemon: [String],
    isAdmin: {type:Boolean, default: false},
})

module.exports = model('Blog', blogSchema)