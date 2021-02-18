import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../constants';
import { Nav, RightNav } from './style';
import './style.css';

const Navbar = () => {
    return (
        <Nav>
            <h1>{Logo}</h1>

            <RightNav>
                <NavLink to="/" exact className="passive" activeClassName="active">Home</NavLink>
                <NavLink to="/portfolio" className="passive" activeClassName="active">Portfolio</NavLink>
                <NavLink to="/about" className="passive" activeClassName="active">About</NavLink>
                <a 
                    href="https://devmichael.blogspot.com" 
                    className="passive"
                    target="_blank"
                    rel="noreferrer">Blog</a>
            </RightNav>
        </Nav>
    )
}

export default Navbar;