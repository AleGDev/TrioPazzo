import React from "react";

import svgs from "../img/sprite.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <svg>
                    <use href={`${svgs}#icon-dribbble`}/>
                </svg>
                <svg>
                    <use href={`${svgs}#icon-twitter`}/>
                </svg>
                <svg>
                    <use href={`${svgs}#icon-google`}/>
                </svg>
                <svg>
                    <use href={`${svgs}#icon-linkedin`}/>
                </svg>
            </div>
            <div className="footer__texts">
                <h1 className="footer__author">Alessandro Gargaro</h1>
                <p className="footer__copyright" >&copy; Copyright 2022</p>
                <p className="footer__copyright-desc" >All rights reserved. Powered by myself</p>
            </div>
        </footer>
    )
}


export default Footer;