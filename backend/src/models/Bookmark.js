const mongoose = require('mongoose');

const bookMarkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    poll: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

bookMarkSchema.index({ user: 1, poll: 1}, { unique: true });

module.exports = mongoose.model('Bookmark', bookmarkSchema);