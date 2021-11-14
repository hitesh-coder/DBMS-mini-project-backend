const mongoose = require('mongoose');

const userProfileSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Your Name"
    },
    registrationNumber: {
        type: Number,
        default: 00000
    },
    email: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        default: "2021-22"
    },
    semester: {
        type: Number,
        default: 5
    },
    program: {
        type: String,
        default: "B.E."
    }
})

const Profile = mongoose.model('profile', userProfileSchema);

module.exports = Profile;