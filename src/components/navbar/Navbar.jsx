import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div>
            <Link to={'/'}>Logo</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/explore'}>Explore</Link>
            <Link to={'/trending'}>Trending🔥</Link>
            <Link to={'/FAQ'}>FAQ</Link>
        </div>
    )
}