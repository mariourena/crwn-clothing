import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = props => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link to="/signin" className="option">Sign In</Link>
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/shop" className="option">Contact</Link>
        </nav>
    </header>
);

export default Header;