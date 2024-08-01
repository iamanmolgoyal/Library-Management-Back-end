const mongoose = require('mongoose');

const publicationModel = new mongoose.Schema({
    name:{type:String,unique:true,required:true},
    mobile_number:{type:Number,unique:true,required:true},
    email:{type: String, unique: true, required: true},
    country:{type:String,default:'India'}
})

module.exports = mongoose.model('publication',publicationModel);