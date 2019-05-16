import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions'

// stripe default is US cents (500 means 5$)
// the token below takes the token sent by stripe for payment
// so it can be sent back to user

// process.env used because access environment variable
// and defined the stripe key in a .env file

// debugger; --this pauses the code at sources so you can see what
// happends in the browser for these variable values

// If use stripecheckout as self closing it shows a weird 
// button, if you use it as 2 tags you can create you own 
//button

class Payments extends Component {

    render() {

        return (

            <StripeCheckout
            name="Emaily"
            description="$5 for 5 email credits" 
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >

            <button className="btn">
            Add Credits
            </button>

            </StripeCheckout>
        );
    }
}

// there's no mapstatetoprops perameter needed here which is why
// it takes null

export default connect(null,actions)(Payments);