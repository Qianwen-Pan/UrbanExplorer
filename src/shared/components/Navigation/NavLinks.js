import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css"
function NavLinks(){
    return (
        <ul className="nav-links"> 
            <li>
                <NavLink to='/'>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to='/u1/places'>MY PALCES</NavLink>
            </li>
            <li>
                <NavLink to='/new/places'>ADD PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>AUTHENTICATE</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;