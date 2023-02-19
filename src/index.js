import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./redux/store"
import './index.css';
import {Wrapper} from "./parts/wrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <Wrapper/>
            </Provider>
        </HashRouter>
    // </React.StrictMode>
);
