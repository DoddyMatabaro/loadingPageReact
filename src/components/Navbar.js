import React from 'react'
import "./Navbar.css"
import{FiMenu, Fix} from "react-icons/fi";

// const navbarLinks = [{ url: "./Home", title: "Home"}]
export const Navbar = ({NavbarLink}) => {
  return (
    <nav>
        <ul>
            {navbarLinks.map((item)=>{
                return (
                    <li className='navBar_item' key={item.title}>
                        <a className="navBar_link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
            );
            })}
        </ul>
    </nav>
  )
}
