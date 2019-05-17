
const keys=require('../config/keys')
const stripe=require('stripe')(keys.stripeSecretKey);
// below is the first middleware, where second one in app.post
// runned is user is logged in
const requireLogin = require('../middlewares/requireLogin')

module.exports=app=>{

    // with app.post/get and so forth, there can be infinite arguments, but just runs all the ones that works until the response is sent back with res.send
    app.post('/api/stripe',requireLogin, async (req,res)=>
    {

      const charge=await stripe.charges.create({
            amount: 500,
            currency:'usd',
            description:'credit charge',
            // the body parser put stripe charge object in stripe body,
            // and we want the id property
            source:req.body.id

        });
        // below lets us access the current user model for credit
        // and saves the changes inside of our database

        // saving to database is asynchronous, so use await

        req.user.credits+=5;
        const user= await req.user.save();

        // IMPORTANT: Post functions where api post, and req
        // receives info in post request where can store in
        //database with save, and then res can be used to resend the
        //the results


        // req takes from post url, and res sends back to post url
// What happens to save it in database is you have to save it and redefine the user
        res.send(user);
    });

};