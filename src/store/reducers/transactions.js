import {ADD_TRANSACTION} from '../actions/ActionTypes';

const initialstate = {
    transactions:[
        
        
    ],
};

export default (state = initialstate, {type, payload}) => {
    switch (type) {
        case ADD_TRANSACTION:{
            return {
                ...state,
                transactions: [payload, ...state.transactions], 
            }
        }
        
        default:
            return state;
    }
};