import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const input1Feedback = (state = {}, action)=>{
    if (action.type === 'ADD_INPUT_1'){
        return action.payload;
    }
    return state;
}
const input2Feedback = (state = {}, action)=>{
    if (action.type === 'ADD_INPUT_2'){
        return action.payload;
    }
    return state;
}
const input3Feedback = (state = {}, action)=>{
    if (action.type === 'ADD_INPUT_3'){
        return  action.payload;
    }
    return state;
}
const input4Feedback = (state = {}, action)=>{
    if (action.type === 'ADD_INPUT_4'){
        return  action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        input1Feedback,
        input2Feedback,
        input3Feedback,
        input4Feedback,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
