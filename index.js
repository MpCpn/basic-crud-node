const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT ;
const productRouter = require('./routes/product');

app.use(express.json())
app.use('/product', productRouter)

const connected = async () =>{
   try{
    await mongoose.connect(process.env.MOGOURL);
    console.log('connected database');
   }catch(err){
        console.log(err);
   } 
}

app.listen(port, ()=>{
    connected();
    console.log(`Server start on port ${port}`);
})