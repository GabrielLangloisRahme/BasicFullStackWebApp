// this imports the downloaded material css from client modules folder to here
// webpack converts all file to .js if don't put extension, otherwise put extension

import 'materialize-css/dist/css/materialize.min.css';


//this is where most of the redux is

import React from 'react';
import ReactDOM from 'react-dom';

// the provider tag allows us to keep track of things from redux at any nested level
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

// this is from the App.js file

import App from './components/App';
import reducers from './reducers'

/* Don't include below because it give hackers access
But you can include it while on local server and use it to 
test api --> look at test email sending in course if forget
*/
import axios from 'axios';
window.axios=axios;



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


// The redux store for our app combines 2 types of reducers
//it has authreducer to record whether user logged in and
//surverReducer to list all surveys user create








// If go to public folder then index html would see root of everything has id root

// the code below sends the functional component App to the root on public html

ReactDOM.render(
<Provider store={store}><App /></Provider>
,document.querySelector('#root'));

