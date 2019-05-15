const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
// the ./ means look in current directory.
// the ../ means go up 1 directory
const keys = require('../config/keys');

const mongoose = require('mongoose');

// as shown here, one argument means we are fetching something out of mongoose
const User=mongoose.model('users')

//the user inputed here is an instance of User model
// defined when user created in code much further below
passport.serializeUser( (user,done)=>{

    // because using user.id this is mango unique identifier that
    //they create after data enters database.this is not refering to the 
    // attribute googleId
    done(null,user.id)

}
);

passport.deserializeUser((id,done)=> {
    User.findById(id)
    .then(user =>{
        done(null,user);
    });
});



/* creates new instance of google strategy. Tells passport
that there is a new strategy available to use.*/
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    //this provides information of user once authonticated for database
    //remember cin
    async (accessToken, refreshToken, profile, done) => {
        
        // below attempts to find 1 user in User model where
        //the google id equivalent to the profile id of current user
        //whenever use mangodb queries make sure to use asynchronise functions like promises

        const existingUser=await User.findOne({googleId:profile.id})
        
            if (existingUser){
                // we already have record with profile id
                //the done holds null for error parameter to show
                // no error, and second parameter is object looked at
                return done(null, existingUser);
            }
            // there is no else here because if statement returns
            //meaning exits function before making it here if restriction met

                // we don't have user record with this id.
                const user=await new User({googleId:profile.id}).save()
                done(null, user);
           

    }

)
)
        
        // the User here created in api but need .save to put it in mongodbdatabase
