import {FETCH_USER} from '../actions/types';

// this outputs whether user loged in with 3 options
// null, false or user info


export default function(state=null,action) {
   // console.log(action);
    switch(action.type){

        case FETCH_USER:
        // empty strings take falase
            return action.payload || false;


        default:
        return state;
    }
}