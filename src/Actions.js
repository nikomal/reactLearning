import * as ActionTypes from './actionType';

export const increment = (counterCaption) => {
    return {
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    }
};