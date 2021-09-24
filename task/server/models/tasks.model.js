const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    remainder: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('task', taskSchema);