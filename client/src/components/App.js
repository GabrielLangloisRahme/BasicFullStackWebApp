// if file returns a class, name file with capital
// if file returns functions and other stuff, use lowercase

import React, {Component } from 'react';

// React Router Dom connects routs (url) to what gets shown on the screen
// BrowserRouter sets things up based on rules from the route
import { BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from  '../actions';

import Landing from './Landing';
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;



//Below shows a functional component

//BrowserRouter component can only have 1 child in it
// / in path indicates root webaddress, ex:gps.com
// when path happens, it will show the component, it shows all components
// website.com/surveys can show components for post / and /surverys if dont
// do exact={true} or exact (shorcut in jsx)

class App extends Component {

    // this with the actions folder determines whether login or not
    componentDidMount() {
        this.props.fetchUser();

    }

    //this returns jsx
    // the container class use to add padding for material css elements
        render() {
            return (
                <div className="container">
            
                <BrowserRouter>
                <div>
                <Header />  
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>

                </BrowserRouter>
                </div>
            
            );
            }

}

// below connects all actions to App components as props
export default connect(null, actions)(App);
