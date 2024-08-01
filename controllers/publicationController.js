const express = require('express')

const user = require('../models/publicationSchema')

//create Operation
const registerPub = async(req,res)=>{                              //post request
    
   
    const inputData = req.body;

    if(!inputData.email || !inputData.mobile_number){
        return res.send('Provide data to create your account');
    } 

    else{

        try{

        const existingUserEmail = await user.findOne({ 'email': inputData.email});                //function to find duplicate entries

        const existingUserMob = await user.findOne({'mobile_number':inputData.mobile_number})

        if (existingUserEmail || existingUserMob) {
        return res.status(409).json({                        //to send message of duplicate response on postman
            'message': "Publication already exists"
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
const getPub = async (req,res) =>{
    try{
        const getPub = await user.find();
        console.log(getPub);
        res.json({
            'status':200,
            'message':"Publication List",
            data :getPub
        })
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


//Update operation
const updatePub = async (req,res)=>{
    try{
        const id = req.params._id;
        const updateData = req.body;
        if(!id || !inputData){
            res.send('Provide specific field to get update');
        }
        else{
            const updatePub = await user.findByIdAndUpdate(id,updateData,{
                new:true
            });
            console.log(updatePub);
            res.send(updatePub);
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
}


//Delete Operation
const deletePub = async(req,res) =>{
    try{
    const id = req.params._id;
    if(!id){
        res.send('Provide specific field to delete');

    }
    else{
        const deletePub = await user.findByIdAndDelete(id);
        console.log(deletePub);
        res.send(deletePub);
    }

}catch(err){
    console.log(err);
    res.send(err);
}
}

module.exports= {registerPub,getPub,updatePub,deletePub}