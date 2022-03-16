import React from "react";

import logo from "../img/GrassNew.png"
import svgs from "../img/sprite.svg"
import { NavLink } from "react-router-dom";


const headerLink = (icon, text) => {
    return (
    <React.Fragment>
        <svg>
            <use href={`${svgs}#icon-${icon}`} />
        </svg>
        {text}
    </React.Fragment>
    )
}

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box" >
                <img src={logo} alt="logo" className="header__logo" />
                <h4 className="header__logo-text" >Trio Pazzo Sgravato</h4>
            </div>
            <ul className="header__links" >
                <li><NavLink className="header__link" to="/" >{headerLink("home", "Home")}</NavLink></li>
                <li><NavLink className="header__link" to="/discordate" >{headerLink("typing", "Discordate")}</NavLink></li>
                <li><NavLink className="header__link" to="/eventi" >{headerLink("megaphone", "Eventi")}</NavLink></li>
                <li><NavLink className="header__link" to="/roba" >{headerLink("cog", "Roba")}</NavLink></li>
            </ul>
        </header>
    )
}


export default Header;