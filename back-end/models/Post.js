const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const PostSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    
     email: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('posts',PostSchema);