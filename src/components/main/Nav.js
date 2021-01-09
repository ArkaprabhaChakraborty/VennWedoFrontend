import React from 'react';
import './Navbar.css';
import {ReactComponent as LogoUpper} from './Logoupper.svg';
import { PageviewRounded } from '@material-ui/icons';
function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <LogoUpper/>
            </div>
            <div className="search">
                <input placeholder="Search"></input>
                <div className="search_button">
                    <PageviewRounded fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Nav
