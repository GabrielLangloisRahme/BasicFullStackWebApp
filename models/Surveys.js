const mongoose = require ('mongoose');
const {Schema}=mongoose;
const RecipientSchema=require('./Recipient');

const surverySchema = new Schema({

    title: String,
    body: String,
    subject: String ,
    // below communicates to mongoose that recipient property type is array of the subdocument collection RecipientSchema taken from another file where types are mentioned there

    recipients: [recipientSchema],

   // In mongoose, can have property within a property where recipient property
   // will hold email of recepient and whether the email sent was clicked

   // when survey model is created, create a collection called surveys collection
   // this collection is a bunch of different instances of different surveys
   // Can have a bunch of recipients in a survey, and these recipients called subdocument collection
   // Have survey model seperate to user model, instead of a subdocument collection, it's for space optimization
  
  
   yes:{type:Number, default:0},
   no:{type:Number, default:0},

   // below indicates with _ convention that it's refering to another model class
   // the ref actually refers to the user collection so that the type gets found correctly
   _user:{type:Schema.Types.ObjectId, ref: 'User'},

   dateSent:Date,
   lastResponded: Date


});

mongoose.model('surveys', surveySchema);