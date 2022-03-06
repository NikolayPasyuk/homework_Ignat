import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <NavLink to={PATH.PRE_JUNIOR} className={
                ({isActive}) => isActive ? 'activeLink' : 'navLink'}>pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR} className={
                ({isActive}) => isActive ? 'activeLink' : 'navLink'}>junior </NavLink>
            <NavLink to={PATH.JUNIOR_PlUS} className={
                ({isActive}) => isActive ? 'activeLink' : 'navLink'}>junior+</NavLink>
        </div>
    )
}

export default Header
