const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    favouriteFood:String,
    membershipData:{
        type:Data,
        
    }
});

const User = mongoose.model('User', schema);

module.exports = User;