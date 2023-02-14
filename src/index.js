import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './index.css';
import {Wrapper} from "./parts/wrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Wrapper />

        {/* <div className='wrapper'> */}
        {/*    <Header /> */}
        {/*    <Routes> */}
        {/*        <Route path='/' element={<MainPage />} /> */}
        {/*        <Route path='/contract' element={<ContractPage />} /> */}
        {/*        <Route path='/terms' element={<Terms />} /> */}
        {/*        <Route path='/books/:category' element={<MainPage />}/> */}
        {/*        <Route path='/:id' element={<BookPage />} /> */}
        {/*    </Routes> */}
        {/*    <Footer /> */}
        {/* </div> */}

    </HashRouter>
  </React.StrictMode>
);
