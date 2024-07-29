import { useState } from "react"

import "./style.css"
import { LangButton, NavBar } from "../../components"
import colorGroup_logo from "../../assets/colorGroup_logo.png"
import { Link } from "react-router-dom"

const Header = ({ links }) => {

    const [enterUtils, setEnterUtils] = useState(false)


    const handleClick = () => {
        setEnterUtils(!enterUtils)
    }

    return (
        <header className="headerContainer">
            <Link to="/"><img src={colorGroup_logo} alt="Color Grupo Logo" /></Link>
            <div className={`header-mobileButton ${enterUtils ? "header-mobileButton-active" : ""}`} onClick={handleClick}>
                <div className="header-mobileButton-line header-mobileButton-topLine"></div>
                <div className="header-mobileButton-line header-mobileButton-bottomLine"></div>
            </div>
            <div className={`headerContainer-utilsContainer ${enterUtils ? "headerContainer-utilsContainer-enter" : ""}`}>
                <LangButton />
                <NavBar links={links} />
            </div>
        </header>
    )
}

export default Header