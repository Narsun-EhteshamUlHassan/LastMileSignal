import React from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../../assets"

const Navbar = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="check_btn">
                <i><GiHamburgerMenu /></i>
            </label>
            <label className="logo">
                <img src={logo} className="logo_img" />
                <span>
                    Delux India Logistics
                </span>
            </label>
            <ul>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Hire Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
