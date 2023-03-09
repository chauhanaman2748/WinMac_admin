const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true,
        minlength: 6,
        unique:true,
    },
    email: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true

    },
    password: {
        type:String,
        required:true,
        trim:true,
        minlength:8,
    },
    name: {
        required:true,
        type: String,
        trim: true,
    },
    intake: {
        required:true,
        type: String,
        trim: true,  
    },
    eventBooked: {
        type: [{
            type: String,
            unique: true,
            trim: true,
        }],
    },
    eventAttended: {
        type: [{
            type: String,
            unique: true,
            trim: true,
        }],
    },
},{timestamps: true, collection: 'users'});


const User = mongoose.model('User', userSchema);

module.exports = User;