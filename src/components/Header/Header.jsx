import React from 'react';
import './Header.css';
import Button from "../Button/Button";

const Header = () => {
    return (
        <div className={'header'}>
            <Button onClick={() => window.location.href = '/'}> Гдавная </Button>
            <Button onClick={() => window.location.href = '/form'}> Форма </Button>
            <span className={'username'}>
                username
            </span>
        </div>
    );
};

export default Header;
