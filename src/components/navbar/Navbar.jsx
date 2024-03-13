import React from "react";
import './navbar.css';
// import { Link } from "react-router-dom";
import logoFigure1 from '../../assets/logo/Polygon 1.svg';
import logoFigure2 from '../../assets/logo/Polygon 2.svg';
import logoFigure3 from '../../assets/logo/Polygon 3.svg';
import searchIcon from '../../assets/ri_search-line.svg';
import backgroundImage from '../../assets/header-background.svg';

export function Navbar() {
    return (
        <div className="app__navbar section__padding" style={{background: `url(${backgroundImage})`}}>
            <div className="app__navbar-left">
                <a className="app__navbar-left_logo" to={'/'}>
                    <img src={logoFigure1} alt="logo Figure 1"/>
                    <img src={logoFigure2} alt="logo figure 2"/>
                    <img src={logoFigure3} alt="logo figure 3"/>
                </a>
                <div className="app__navbar-left_searchBar">
                    <img src={searchIcon} alt="search icon"/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="app__navbar-links">
                <a to={'/explore'} className="link">Explore</a>
                <a to={'/explore'} className="link">Trending 🔥</a>
                <a to={'/FAQ'} className="link">FAQ</a>
            </div>
        </div>
    )
}