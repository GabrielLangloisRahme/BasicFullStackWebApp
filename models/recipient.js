// The recipient is a subdocument collection of survey collection model

const mongoose = require('mongoose')
const {Schema}=mongoose;


const recipientSchema = new Schema({
    email:String,
    responded: {type:Boolean, default:false}

});

module.exports=recipientSchema;
