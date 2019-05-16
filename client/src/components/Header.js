import React, {Component} from 'react'
// Links used to go to other links within domain while anchor can go anywhere


// we hook header component to redux store so its also aware 
// when user login with authetication key
//To do this we:
//1. Import connect helper from react redux
//2. We define map state define function
// 3. We pull off states we care about inside component


//This what makes user credit update
//1. At actions index.js, it gets user infor from current_user api and stripe api
//2. These values get updated in t Fetch_user with dispatch function in above files
//3. Fetch_user taken in authReducer file, and updates the user model with action.payload
//4. Because auth reducer ran, it creates new piece of state (state updated) and redux state updates
//5. Because redux state updates, all components in the application will also update

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    
    renderContent() {
        switch(this.props.auth) {
            
            case null:
                return ;
            case false:
                return (<li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return [<li key="1"><Payments /></li>,
                        <li key="2" style={{margin:'0 10px'}}>
                        Credits:{this.props.auth.credits}
                        </li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>];

        }
    }


    render(){
        console.log(this.props.auth);
        return (

        

            <nav>

                <div className="nav-wrapper">


                <Link 
                    to={this.props.auth ? '/surveys' : '/'} 
                    className="left brand-logo"
                >
                    Emaily
                </Link>   

                <ul className="right">
                    {this.renderContent()}
                </ul>

                </div>

            </nav>

        );
    }
}

// below is the same as this

function mapStateToProps(state) {
    return {auth: state.auth};
}


/*
function mapStateToProps({auth}) {
    return {auth}
}

*/

export default connect(mapStateToProps)(Header);