import { Link } from "react-router-dom"

import "./style.css"
import linkeinLogo from "../../assets/logos/linkedin_logo.png"
import facebookLogo from "../../assets/logos/facebook_logo.png"
import instagramLogo from "../../assets/logos/instagram_logo.png"
import { useLanguage } from "../../context/languageContext"

const Footer = ({ links }) => {

    const { language } = useLanguage()

    const scrollingMarquee = (str) => {
        return (
            <div className="scrollingMarquee">
                <h2>{str}</h2>
                <h2>{str}</h2>
            </div>
        )
    }

    return (
        <footer className="footerContainer">
            <div className="footer-topContainer">
                <div className="footer-smContainer">
                    <a href="" target="_blank" rel="noopener noreferrer"><img src={linkeinLogo} alt="linkedin logo" /></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="facebook logo" /></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="instagram logo" /></a>
                </div>
                <div className="footer-linksContainer">
                    <ul>
                        <li className="navLink-line-animation"><Link to="/">INICIO</Link></li>
                        {links[language].map((item, index) => {
                            return (
                                <li className="navLink-line-animation" key={index}><Link to={item.path}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="footer-contactUs">
                {scrollingMarquee("HÁBLENOS")}
            </div>
            <div className="footer-copyright">
                <p>All rights reserved 2024 © Colorcopygroup</p>
            </div>
        </footer>
    )
}

export default Footer