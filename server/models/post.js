const
    m        = require('../lib/mongoose'),
    Schema   = m.Schema,
    mongoose = m.mongoose

const post_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    visited: {
        type: Number,
        default: 0
    },
    url: {
        type: String,
        default: ''
    },
    nav: {
        type: String,
        default: ''
    }
})


const postModel = mongoose.model('post', post_schema)

module.exports = postModel
