const express = require('express');
// import express from 'express'                       //both are correct

const mongoose = require('mongoose');                  // need to run command : npm i mongoose to install mongoose library


// const userModel = require('./models/userSchema')          // attaching files
const bookModel = require('./models/booksSchema')
const authorModel = require('./models/authorSchema')
const publicationModel = require('./models/publicationSchema')

const dBConnect = require('./middlewares/dB')              // attaching database by attaching another file 


const app = express();
const PORT = 3000;


app.use(express.json());                                      //middleware


// userModel();

bookModel();
authorModel();
publicationModel();

dBConnect();                                         //calling function to connect database 


// const userController = require('./controllers/userController')           //attaching post request in controllers 

const bookController = require('./controllers/bookController')
const authorController = require('./controllers/auhtorController')
const publicationController = require('./controllers/publicationController')


// app.get('/',(req,res) => {                                     //get request
//     res.send("Mai Keha Hello ggggg");
// })

// app.get('/Home',(req,res)=>{
//     res.send('Hello I am Homepage')
// })


// app.post('/register',userController.register);                       //using post request from another file
// app.post('/login',userController.login);


// //CRUD operation

// //READ Operation

// app.get('/getData',userController.getUser);

// //Update Operation
// app.post('/updateUser/:_id',userController.updateUser);

// //Delete Operation
// app.post('/deleteUser/:_id',userController.deleteUser);



//library Management

//Book
app.post('/registerBook',bookController.registerBook);
app.get('/getBook',bookController.getBook);
app.post('/updateBook/:_id',bookController.updateBook);
app.post('/deleteBook/:_id',bookController.deleteBook);

//Author
app.post('/registerAuthor',authorController.registerAuthor);
app.get('/getAuthor',authorController.getAuthor);
app.post('/updateAuthor/:_id',authorController.updateAuthor);
app.post('/deleteAuthor/:_id',authorController.deleteAuthor);

//Publication
app.post('/registerPub',publicationController.registerPub);
app.get('/getPub',publicationController.getPub);
app.post('/updatePub/:_id',publicationController.updatePub);
app.post('/deletePub/:_id',publicationController.deletePub);



app.listen(PORT, ()=>{                                          //should be at last
    console.log(`Server started on ${PORT}`);
})

