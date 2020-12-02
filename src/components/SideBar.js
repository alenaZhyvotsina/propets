import React from 'react';
import Menu from "./Menu";
import Avatar from "./Avatar";
import style from "../css_modules/sides.module.css";

const SideBar = () => {
    return (
        <div className={`col-12 col-sm-4 col-md-2 ${style.sides}`}>
            <Menu/>
            <Avatar/>
        </div>
    );
};

export default SideBar;