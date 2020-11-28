import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/shop" className="option">Contact</Link>
            {
                currentUser ?
                <a className="option" onClick={() => auth.signOut()}>Sign Out</a>
                : <Link to="/signin" className="option">Sign In</Link>
            }
            
        </nav>
    </header>
);

export default Header;