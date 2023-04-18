const mongoose=require("mongoose");

module.exports.dbConnection=async()=>{
    return await mongoose.connect('mongodb://0.0.0.0:27017/test-pdf').then(()=>{
        console.log('Connected to mongo database successfully ');
    }).catch((err)=>{
        console.log(err);
    })
}