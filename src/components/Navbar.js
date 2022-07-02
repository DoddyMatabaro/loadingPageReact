import React, { UseState } from 'react'
import "./Navbar.css"
import{FiMenu, FiX} from "react-icons/fi";

// let UseState  = useState; 
const Navbar = ({navbarLinks}) => {
        const [menuClicked, setMenuClicked] =  UseState(false);         
        const toggleMenuClick=()=>{
            setMenuClicked(!menuClicked);
        }

  return(
    <nav className="navbar">
        {/* <span className='navbar'></span> */}
        <span className="navbar_logo">DM inc</span>
        { menuClicked ? (
            <FiX size={25} className="navbar_menu" onClick={toggleMenuClick} />
        ) : (
            <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClick} />
        )}
        <ul className='navbar_list'>
            {navbarLinks.map((item)=>{
                return (
                    <li className='navbar_item' key={item.title}>
                        <a className="navbar_link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
            );
            })}
        </ul>
    </nav>

  )
}
export default Navbar;