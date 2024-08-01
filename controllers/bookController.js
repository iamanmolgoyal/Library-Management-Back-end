const express = require('express')

const user = require('../models/booksSchema')

//create Operation
const registerBook = async(req,res)=>{                              //post request
    
   
    const inputData = req.body;

    if(!inputData.book_name || !inputData.author){
        return res.send('Provide data of book');
    } 

    else{

        try{

        const existingBook= await user.findOne({ 'book_name': inputData.book_name});                //function to find duplicate entries

        const existingEdition = await user.findOne({'edition':inputData.edition})

        if (existingBook || existingEdition) {
        return res.status(409).json({                        //to send message of duplicate response on postman
            'message': "Book already exists"
            });
        }

        const data = await user.create(inputData);
        console.log(data);
        res.json({
            status:200,
            message:'Register successful',
            data: data
        })
    
    }catch(err){
        console.log(err);
        res.send(err);
    }
 }
}


//READ Operation
const getBook = async (req,res) =>{
    try{
        const getBook = await user.find();
        console.log(getBook);
        res.json({
            'status':200,
            'message':"Book List",
            data :getBook
        })
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


//Update operation
const updateBook = async (req,res)=>{
    try{
        const id = req.params._id;
        const updateData = req.body;
        if(!id || !inputData){
            res.send('Provide specific field to get update');
        }
        else{
            const updateBook = await user.findByIdAndUpdate(id,updateData,{
                new:true
            });
            console.log(updateBook);
            res.send(updateBook);
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


//Delete Operation
const deleteBook = async(req,res) =>{
    try{
    const id = req.params._id;
    if(!id){
        res.send('Provide specific field to delete');

    }
    else{
        const deleteBook = await user.findByIdAndDelete(id);
        console.log(deleteBook);
        res.send(deleteBook);
    }

}catch(err){
    console.log(err);
    res.send(err);
}
}


module.exports= {registerBook,getBook,updateBook,deleteBook}