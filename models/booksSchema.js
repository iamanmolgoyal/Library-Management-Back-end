const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    book_name:{type:String,unique:true,required:true},
    author:{type:String,required:true},
    publication:{type:String,required:true},
    language:{type:String},
    edition:{type:Number,default:1}
})

module.exports = mongoose.model('book',bookModel);