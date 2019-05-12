//key.js - figure out what set of credentials to return

//yo

//the if below will work with heroku, thus always else will run in local environment
if (process.env.NODE_ENV ==='production') {
    // we are in production return prod keys
    console.log(process.env.GOOGLE_CLIENT_ID);
    console.log(process.env.GOOGLE_CLIENT_SECRET);
    module.exports=require('./prod');
}
else {
    //return dev keys
    module.exports=require('./dev');
}
