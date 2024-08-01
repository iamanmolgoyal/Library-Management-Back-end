const mongoose = require('mongoose');

const authorModel = new mongoose.Schema({
    name:{type:String,required:true},
    DOB:{type:Number,required:true},
    mobile_number:{type:Number,unique:true,required:true},
    email:{type: String, unique: true, required: true}
})

module.exports = mongoose.model('author',authorModel);