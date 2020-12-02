import React from 'react';
import style from "../css_modules/info.module.css";

const Footer = () => {
    const footerStyle = `row mt-1 ${style.infoBox}`;
    return (
        <div className={footerStyle}>
            <p className='col-12 text-center align-content-center'> 2020 &copy; </p>
        </div>
    );
};

export default Footer;