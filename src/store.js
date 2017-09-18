
import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValue = {
    'first':0,
    'second':2,
    'third':3
};

const store = createStore(reducer,initValue);

export default store;