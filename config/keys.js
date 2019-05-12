//key.js - figure out what set of credentials to return

//yo

//the if below will work with heroku, thus always else will run in local environment
if (process.env.NODE_ENV ==='production') {
    // we are in production return prod keys
    module.export=require('./prod');
}
else {
    //return dev keys
    module.export=require('./dev');
}
