import React from 'react';
import store from "./redax/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "./react-redux";


let renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe (() => {
    let state = store.getState();
    renderTree(state);
});

reportWebVitals();
