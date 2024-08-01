const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name:{type: String},
    mobile_number: {type: Number, unique: true, required:true},
    email:{type: String, unique: true, required: true},
    nation:{type: String, default:'Bharat'}
})

module.exports = mongoose.model('user',userModel);
               //mongoose.model is used to create a layout for CRUD operations