import React, { useState } from "react";
import './navbar.css';
import logoFigure1 from '../../assets/logo/Polygon 1.svg';
import logoFigure2 from '../../assets/logo/Polygon 2.svg';
import logoFigure3 from '../../assets/logo/Polygon 3.svg';
import searchIcon from '../../assets/ri_search-line.svg';
import backgroundImage from '../../assets/header-background.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="app__navbar section__padding" style={{background: `url(${backgroundImage})`}}>
            <div className="app__navbar-left">
                <a className="app__navbar-left_logo" href="#">
                    <img src={logoFigure1} alt="logo Figure 1" loading="lazy"/>
                    <img src={logoFigure2} alt="logo figure 2" loading="lazy"/>
                    <img src={logoFigure3} alt="logo figure 3" loading="lazy"/>
                </a>
                <div className="app__navbar-left_searchBar">
                    <img src={searchIcon} alt="search icon"/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="app__navbar-links">
                <a href="#explore" className="link">Explore</a>
                <a href="#trending" className="link">Trending 🔥</a>
                <a href="#" className="link">FAQ</a>
            </div>
            <div className="app__navbar-menu">
                {!toggleMenu ? <MenuIcon fontSize="medium"  onClick={() => setToggleMenu(true)}/> : 
                <div style={{marginBottom: '24px'}}>
                    <div className="app__navbar-menu_container">
                        <CloseIcon className="close-icon" fontSize="medium" onClick={() => setToggleMenu(false)}/>
                        <a href="#explore" className="link">Explore</a>
                        <a href="#trending" className="link">Trending 🔥</a>
                        <a href="#" className="link">FAQ</a>
                    </div>
                </div> 
                }
            </div>
        </div>
    )
}