import React from 'react'
import './Header.css'
import logo from '../../assets/Group.svg'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Popup from '../Popup/Popup';

const Header = () => {
    const [state, setState] = useState(true);
    const handleClick = () => {
        setState(!state);
    };
    return (
        <div className='header-card'>
            <div className="logo">
                <img src={logo} alt="logo" id='header-logo' />
            </div>
            <div className={state ? "nav" : "nav active"}>
                <div className="nav-links">
                    <Link to='/'  >     <a href="">Home</a></Link>
                    <Link to='/Nft'>   <a href="">Place to stay</a></Link>
                    <Link to='/'  >   <a href="">Nfts</a></Link>
                    <Link to='/'  >    <a href="">Community</a></Link>
                </div>
                <div className="header-connect-btn">
                    <Popup />
                </div>
            </div>
            <div className="header-icons">
                <button className={state ? " show" : "hidden"} onClick={handleClick}>
                    <FaBars />
                </button>
                <button className={state ? "hidden" : "show "} onClick={handleClick}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}
export default Header