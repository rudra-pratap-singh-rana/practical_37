const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
        
    
});

const Food = mongoose.model('Food', schema);

module.exports = Food;