const express = require('express')

const user = require('../models/authorSchema')

//create Operation
const registerAuthor = async(req,res)=>{                              //post request
    
   
    const inputData = req.body;

    if(!inputData.email || !inputData.mobile_number || !inputData.name){
        return res.send('Provide data to create your account');
    } 

    else{

        try{

        const existingUserEmail = await user.findOne({ 'email': inputData.email});                //function to find duplicate entries

        const existingUserMob = await user.findOne({'mobile_number':inputData.mobile_number})

        if (existingUserEmail || existingUserMob) {
        return res.status(409).json({                        //to send message of duplicate response on postman
            'message': "Author already exists"
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
const getAuthor = async (req,res) =>{
    try{
        const getAuthor = await user.find();
        console.log(getAuthor);
        res.json({
            'status':200,
            'message':"Auhtor List",
            data :getAuthor
        })
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


//Update operation
const updateAuthor = async (req,res)=>{
    try{
        const id = req.params._id;
        const updateData = req.body;
        if(!id || !inputData){
            res.send('Provide specific field to get update');
        }
        else{
            const updateAuthor = await user.findByIdAndUpdate(id,updateData,{
                new:true
            });
            console.log(updateAuthor);
            res.send(updateAuthor);
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


//Delete Operation
const deleteAuthor = async(req,res) =>{
    try{
    const id = req.params._id;
    if(!id){
        res.send('Provide specific field to delete');

    }
    else{
        const deleteData = await user.findByIdAndDelete(id);
        console.log(deleteAuthor);
        res.send(deleteAuthor);
    }

}catch(err){
    console.log(err);
    res.send(err);
}
}


module.exports= {registerAuthor,getAuthor,updateAuthor,deleteAuthor}