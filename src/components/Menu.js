import React from 'react';
import {Link} from "react-router-dom";
import {foundPostPage, foundsPage, lostPostPage, lostsPage} from "../utils/constants";

const Menu = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to={`/${lostsPage}`}>Losts</Link></li>
                <li><Link to={`/${foundsPage}`}>Founds</Link></li>
                <li>To good hands</li>

                <li>
                    My new post:
                    <ul>
                        <li><Link to={`/${lostPostPage}`}>Lost</Link></li>
                        <li><Link to={`/${foundPostPage}`}>Found</Link></li>
                        <li>To good hands</li>
                    </ul>
                </li>

                <li>
                    Services:
                    <ul>
                        <li>Pet hotels</li>
                        <li>Keeping</li>
                        <li>Walking</li>
                    </ul>
                </li>
                <li>Clinics</li>
            </ul>

        </div>
    );
};

export default Menu;