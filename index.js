const express = require('express');
const mongoose=require('mongoose');

//cookies before passport because here telling cookies to use passport
const cookieSession=require('cookie-session');
const passport = require('passport');

const keys=require('./config/keys');


// this the passport script requires model, this should be present before
require('./models/User');

//the below is needed to insure that we use the passport.js file
//and that it runs
require('./services/passport');


mongoose.connect(keys.mongoURI)

const app = express();

app.use(
    cookieSession({
        // here in ms, so multiply everything so 30 days worth
        maxAge: 30*24*60*60*1000,
        //this used to enscript cookie
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());


//this captures the authroutes exported function

require('./routes/authroutes')(app);

/* Tells the port to use, if heroku it obtains it otherwise 500,
shows were I can see results */

//process.env is a heroku environment function
const P = process.env.PORT || 5000
app.listen(P);


/*

Downloads:

1.git -download

at folder:
git init
git add .
git commit -m "whaterver"
git remote add heroku <server>

2.node.js -download
3. Create folder for app. npm init inside it to create jason file

4. heroku cli -download online then use command prompt

heroku create
git remote add heroku <the second link from above>
git push heroku master
heroku open

5. passport - commandprompt install at folder

npm install --save passport


6. google auth - use prompt then online copy pasting links from api to code

npm install google-auth-library

7.nodemon command prompt to update server changes at folder plus change json

npm install --save nodemon
(once update dev )
npm run dev

8. Get https://www.mongodb.com/cloud/atlas online plus change keys

9. Installing mongoose through command prompt npm install --save mongoose at folder

Do npm install --save mongoose

10. use terminal to install cookie-session

npm install --save cookie-session

(...)

12. npm app env -command prompt



^C lets you exit programs in command prompt
cat lets you open programs on getbash
*/
