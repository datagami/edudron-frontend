const mongoose = require('mongoose');

const VerificationSchema = mongoose.Schema({
  phone: {
    type: String,
    required: true, 
    index: true,
    unique: [true, 'Phone number already exists'],
  },
  isVerified: {
    type: Boolean,
    default: false
  },

}, {
  timestamps: true
})

const Verification = mongoose.model('Verification', VerificationSchema);
module.exports = Verification;