import axios from 'axios';
import {FETCH_USER} from './types';

// generally action function returns something right away but
// because of redux thunk we can produce a function without returning anything

// All this code (the action creator) is to keep track that user
// login so that we need to change the header navigation bar


export const fetchUser = () => 

    // cool thing with arrow function if have just
    // one expression it will return the expression and don't need curly bracket
    // this is the dispatch function
    async dispatch => {
    const res= await axios
    .get('/api/current_user');
    
    dispatch({ type: FETCH_USER, payload: res.data});
    };

    /*
    return {
        type: FETCH_USER,
        payload: request
    }
    */
// this function says wait for the token to be posted in 
// back end location /api/stripe, then take it and update
// it to front end for payload
export const handleToken =(token) => async dispatch => {

    const res = await axios.post('/api/stripe',token);

    dispatch({type: FETCH_USER, payload:res.data});

}
