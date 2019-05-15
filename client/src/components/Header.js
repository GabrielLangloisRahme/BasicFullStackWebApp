import React, {Component} from 'react'


// we hook header component to redux store so its also aware 
// when user login with authetication key
//To do this we:
//1. Import connect helper from react redux
//2. We define map state define function
// 3. We pull off states we care about inside component

import {connect} from 'react-redux';

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return ;
            case false:
                return (<li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return 'Logout';
                //<li><a>Logout</a></li>)
                
        }
    }


    render(){
       // console.log(this.props);
        return (

        

            <nav>

                <div className="nav-wrapper">
                <a className="left brand-logo">
                    Emaily
                </a>   

                <ul className="right">
                    {this.renderContent()}
                </ul>

                </div>

            </nav>

        )
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