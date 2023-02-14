import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './index.css';
import {Wrapper} from "./parts/wrapper";
import {ErrorMessage} from "./parts/error-message/error-message";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Wrapper />
    </HashRouter>
  </React.StrictMode>
);
