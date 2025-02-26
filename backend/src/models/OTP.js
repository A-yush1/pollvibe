const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        enum: ['email_verification', 'password_reset'],
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        default: function() {
            return new Date(Date.now() + 10*60*1000);
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

otpSchema.index({ expiresAt: 1 }, { expiresAfterSeconds: 0 });

module.exports = mongoose.model('OTP', otpSchema);