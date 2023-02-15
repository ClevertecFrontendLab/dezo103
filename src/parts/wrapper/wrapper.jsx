import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {Header} from "../header";
import {MainPage} from "../../pages/main";
import {ContractPage} from "../../pages/contract-page";
import {Terms} from "../../pages/terms";
import {BookPage} from "../../pages/book";
import {Footer} from "../footer";
import {Navigation} from "../nav";
import {ErrorMessage} from "../error-message";
import {Preloader} from "../preloader";
import {application} from "../../redux/app-selectors";


export const Wrapper = () => {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false)

    const app = useSelector(application)

    return (
        <div className='wrapper'>
            <Header isOpenedMenu={isOpenedMenu} setIsOpenedMenu={setIsOpenedMenu}/>
            <div style={{display: 'flex', flex: '1 1 auto'}}>
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
                    <Route path='/books/:category/:id'
                           element={<BookPage/>}/>
                </Routes>
            </div>
            <Footer/>
            {
                app.isErrorConnection && <ErrorMessage/>
            }
            {
                app.isLoading && <Preloader />
            }
        </div>
    );
};
