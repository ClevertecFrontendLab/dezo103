import React from 'react';
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import vk from '../../images/vk.svg'
import linkedin from '../../images/linkedin.svg'
import style from './footer.module.css'


export const Footer = () => (
    <footer className={style.footer}>
        <div>
            <p>© 2020-2023 Cleverland. Все права защищены.</p>
        </div>
        <div className={style.socialLinks}>
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="#"><img src={instagram} alt="instagram"/></a>
            <a href="#"><img src={vk} alt="vk"/></a>
            <a href="#"><img src={linkedin} alt="linkedin"/></a>
        </div>
    </footer>
);
