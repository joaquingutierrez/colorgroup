import { NavLink } from "react-router-dom"

import "./style.css"

const NavBar = ({ links }) => {

    return (
        <nav className="navbarContainer">
            <ul>
                {links.map((item, index) => {
                    return (
                        <li key={index} className={item.special ? "navLink-special" : "navLink-line-animation"}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar