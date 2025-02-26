const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    options: [{
        text: {
            type: String,
            required: true
        },
        votes: {
            type: Number,
            default: 0
        },
        votedBy: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    }],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    }],
    expiresAt: {
        type: Date,
        required: true
    },
    totalVotes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

pollSchema.virtual('isExpired').get(() => {
    return Date.now() > this.expiresAt;
});

module.exports = mongoose.model('Poll', pollSchema);