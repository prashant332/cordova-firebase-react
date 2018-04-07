import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import appReducers from './reducers';
import App from './components/MainPage';

const rootElement = document.getElementById("app");
const logger = createLogger();

const store = createStore(appReducers, applyMiddleware(thunk, promise,logger));

var app = {
    initialize: function() {
        document.addEventListener('deviceready', () => ReactDOM.render(<Provider store={store}>
            <App/>
            </Provider>, rootElement), false);
    }
};

app.initialize();
