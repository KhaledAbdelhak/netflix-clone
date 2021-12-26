import React, { useEffect, useState } from 'react';
import './styles.css'

const Nav = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return() => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" 
                alt="netflix logo" />
            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png" 
                alt="netflix avatar" />
        </div>
    );
};

export default Nav;