import React from 'react'
import { Link } from "gatsby";
import navbarStyles from "../styles/navbar.module.scss"
const Navbar = () => {
    const {navbar, link, brand, activeLink} = {...navbarStyles}
    return (
        
        <nav className={navbar}>
            <Link activeClassName={activeLink} className={link}to="/portfolio">Portfolio</Link>
            <Link activeClassName={activeLink} className={link}to="/about">About</Link>
            <Link className={`${link} ${brand}`}to="/">Felipe V Pena</Link>
            <Link activeClassName={activeLink} className={link}to="/sessions">Sessions</Link>
            <Link activeClassName={activeLink} className={link}to="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar


