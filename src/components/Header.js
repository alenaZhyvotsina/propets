import React from 'react';
import style from "../css_modules/info.module.css";
import Avatar from "./Avatar";
import {homePage} from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
    const headerStyle = `row text-center mt-3 ${style.infoBox}`;
    console.log(headerStyle);
    return (
        <div className={headerStyle}>
            <h1 className='col-8'>
                <Link to={`/${homePage}`} className={`nav-item ${style.title}`}>PETs Service</Link>
            </h1>
            <Avatar classN='col-4'/>
        </div>
    );
};

export default Header;