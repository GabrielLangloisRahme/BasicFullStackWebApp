// this autheticates this user and redirect authetication
//code to callback


//the code below doesn't have to do with passport.js, its calling the 
// original passport module
const passport=require('passport')

//this exports the following function to wherever called
module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google',{
        scope:['profile','email']
    }));
    
    //this uses callback code to say go to user profile
app.get('/auth/google/callback',passport.authenticate('google',{
    // not in course but its not supposed to make it work
    scope:['profile','email'] 
} ),
(req,res)=> {
res.redirect('/surveys')
}

);

// this logs out user
app.get('/api/logout',(req, res)=>{
    //this kills the user cookie and logs out
    req.logout();

    //this would send the user info if existed
    //res.send(req.user);

    res.redirect('/')
})

//this is to test whether authetication works

app.get('/api/current_user',(req, res)=>{
    res.send(req.user);
}); 
};





/*

This shows how to deal with route handlers

app.get('<what's at the end of browser address generally />',
(req<what gets sent to drive from browser>,res <what gets sent to 
    browser from drive>)=> {
        res.send({hi:there})
    }
)

app.listen(the device port)

*/
