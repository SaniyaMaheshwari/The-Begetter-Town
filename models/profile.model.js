const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({

    Username: {
        type: String,
        required: true,
        unique: true
    },

    Name: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true,
        unique: true
    },

    Password: {
        type: String,
        required: True
    },

    Country: {
        type: String
    },

    PhoneNumber: {
        type: String,
        unique: true
    },

    FieldOfInterest: {
        type: String
    },

    TypeOfUser: {
        type: String,
        required: true
    },

    BusinessEmail: {
        type: String,
        unique: true
    },

    Address: {
        type: String
    },

    Bio:{
        type: String
    },

    ProfileImg: {
        data: Buffer,
        contentType: String
    }

});

const Profile = new mongoose.model("Profile", profileSchema);
module.exports = Profile;