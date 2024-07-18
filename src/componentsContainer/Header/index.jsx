import "./style.css"
import { LangButton, NavBar } from "../../components"
import colorGroup_logo from "../../assets/colorGroup_logo.png"
import { Link } from "react-router-dom"

const Header = ({links}) => {

    return (
        <header className="headerContainer">
            <Link to="/"><img src={colorGroup_logo} alt="Color Grupo Logo" /></Link>
            <div className="headerContainer-utilsContainer">
                <LangButton />
                <NavBar links={links} />
            </div>
        </header>
    )
}

export default Header