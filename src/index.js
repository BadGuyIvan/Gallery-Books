import React from "react";
import {render, hydrate} from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import reducers from "./reducers/index";
import {createStore } from "redux";
import {  BrowserRouter as Router} from 'react-router-dom';

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    , 
    document.getElementById("app")
)