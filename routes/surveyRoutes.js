const mongoose=require('mongoose');
const requireLogin=require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer')
const surveyTemplate=require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model('surveys');

module.exports=app=>{
    app.post('/api/surveys',requireLogin, requireCredits,(req,res)=>{

        const {title, subject, body, recipients}=req.body;

        const survey = new Survey({
            title,// same as title:title
            subject,
            body,
            // split changes the set of emails with commas into array of emails, and map changes format. Trim function added to remove all spaces
            recipients: recipients.split(',').map(email => {return {email:email.trim()}}), // same as email => ({email}) with ES6 syntax if had no trim
            _user:req.user.id,
            dateSent:Date.now()
        });

        // Great place to send an email

        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();
    });
}