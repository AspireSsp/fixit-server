const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
    {
        mobile: { 
            type: String, 
            required: true, 
            unique: true 
        },
        otp: { 
            type: String, 
            required: true 
        }
    }
);

const OTP = mongoose.model('otp', otpSchema);

module.exports = OTP;
