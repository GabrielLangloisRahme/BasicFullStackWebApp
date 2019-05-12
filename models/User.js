const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// above same as const {Schema}=mongoose; because Schema found twice

//this collects all properties from object schema and adds one more
const userSchema = new Schema ({
    googleId: String
    // can add more properties here to take from user
})

//this creates a model called users based on userSchema data.
//2 arguments here means they are inputing model into mongoose
mongoose.model('users',userSchema)