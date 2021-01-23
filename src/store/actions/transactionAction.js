import {ADD_TRANSACTION} from './ActionTypes';


export const addTransaction = ({name, image, state, total}) => dispatch => {
    const newTransaction = {
        name,
        image,
        state,
        total
    };

    dispatch({type:ADD_TRANSACTION, payload: newTransaction});
};
