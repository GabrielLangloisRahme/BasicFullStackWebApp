// Front end uses ES2015, while back end uses common js model

// This means that front end need to import values before calling them
// while didn't need this in the back end. This changes how keys.js would
// work on the front end


// IMPORTANT: In client folder, .env.prod uses the same key as
// dev because testing, in real life it would be different

// react-stripe-checkout api is not for payment form put for 
// button that redirects user to stripe payment form


// whenever your using an api, it's asynchronous,
// so you have to use async await (if method returns a chainable promise) or a callback function!

const express = require('express');
const mongoose=require('mongoose');

//cookies before passport because here telling cookies to use passport
const cookieSession=require('cookie-session');
const passport = require('passport');

const keys=require('./config/keys');

// this needed for stripe api backend

const bodyParser=require('body-parser')

// this the passport script requires model, this should be present before
require('./models/User');

//the below is needed to insure that we use the passport.js file
//and that it runs
require('./services/passport');


mongoose.connect(keys.mongoURI)

const app = express();

// express middlewares can only be called in app.use.
// Middlewares operate on incoming request before they are
// sent off to our request handlers



// this below is there so whenever request put or path request body
// our application, the middleware parse body and assign it to
// the req.body property of incoming request object (credit card token)
app.use(bodyParser.json())


app.use(
    cookieSession({
        // here in ms, so multiply everything so 30 days worth
        maxAge: 30*24*60*60*1000,
        //this used to enscript cookie
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


//this captures the authroutes exported function and
// passes in the app as an input

require('./routes/authroutes')(app);
require('./routes/billingRoutes')(app);

// This code should only run when in production (heroku)

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js or main.css file in client folder, build folder
    // this tells it to look for file in this directory for a match

        app.use(express.static('client/build'));

    //Express will serve up the index.html file
    // if it doesn't recognize the route after above

    const path=require('path');

    // the url gets res response with the url name followed by
    // the client, build, index html path

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client'
        ,'build','index.html'))
    })



}




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

11. Install react app
In admin priviledge:

npm install -g create-react-app -save
npx create-react app client
npm start <while in client directory>

12. In client directory do

npm install http-proxy-middleware --save

create setupProxy.js in client/src/ with this code

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}

13. In client directory

cd client
npm install --save redux react-redux react-router-dom

14. In client directory

npm install materialize-css@next

15. Install axios library which is important for api requests
and Redux crunck used to make asynchronize functions work well together

cd client
npm install --save axios redux-thunk

16. In client folder, install react stripe check out with

cd client
npm install --save react-stripe-checkout

17. On server side, install stripe api

npm install --save stripe

18. On server right after install stripe, install body parser
npm install --save body-parser


19. 

a) bulding production app in server
cd client
npm run build
 this then creates everything you need in final version in
 client folder, build folder

b) Having Heroku build production app

Remember heroku only cares about package.json file in server directory













remove proxy scripts from client side json






^C lets you exit programs in command prompt
cat lets you open programs on getbash
-g means have it accessable globally
*/
