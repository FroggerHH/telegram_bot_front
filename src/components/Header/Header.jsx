import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import "../NavLink/NavLink.css";

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'/'}> Гдавная </NavLink>
            <NavLink to={'/form'}> Форма </NavLink>
            <span className={'username'}>
                username
            </span>
        </div>
    );
};

export default Header;
