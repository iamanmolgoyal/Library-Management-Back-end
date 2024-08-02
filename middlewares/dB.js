const mongoose = require('mongoose')

const username ='iamanmolgoyal';     //for making dynamic url here variables are declared and backticks(``) are used in url
const password = '**********';

const url = `mongodb+srv://${username}:${password}@cluster0.abgr3jn.mongodb.net/BackEnd?retryWrites=true&w=majority&appName=Cluster0`


// USING .then and .catch

// const dBConnect = async() =>{

//    await mongoose.connect(url,{
//         useNewUrlParser: true,                                    //3rd party middleware
//         useUnifiedTopology: true
//     }).then((data)=>{
//         console.log(`Database Connected`,data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }



// USING try and catch
const dBConnect = async()=>{
    try{
        const db = await mongoose.connect(url)
        console.log(`DB Connected`);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = dBConnect;
