import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "../header";
import {MainPage} from "../../pages/main";
import {ContractPage} from "../../pages/contract-page";
import {Terms} from "../../pages/terms";
import {BookPage} from "../../pages/book";
import {Footer} from "../footer";
import {Navigation} from "../nav";
import {ErrorMessage} from "../error-message";
import {Preloader} from "../preloader";


export const Wrapper = () => {

    const [isOpenedMenu, setIsOpenedMenu] = useState(false)

    return (
        <div className='wrapper'>
            <Header isOpenedMenu={isOpenedMenu} setIsOpenedMenu={setIsOpenedMenu}/>
            <div style={{display: 'flex'}}>
                <Navigation isOpenedMenu={isOpenedMenu} setIsOpenedMenu={setIsOpenedMenu}/>
                <Routes>
                    <Route path='/'
                           element={<MainPage/>}/>
                    <Route path='/contract'
                           element={<ContractPage/>}/>
                    <Route path='/terms'
                           element={<Terms/>}/>
                    <Route path='/books/:category'
                           element={<MainPage/>}/>
                    <Route path='/:id'
                           element={<BookPage/>}/>
                </Routes>
            </div>
            <Footer/>
            {
                false && <ErrorMessage/>

            }
            {
                false && <Preloader />
            }
        </div>
    );
};
