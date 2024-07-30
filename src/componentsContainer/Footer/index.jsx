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

    const translations = {
        spanish: {
            home: "Inicio",
            contact: "Contacto",
            marquee: "HÁBLENOS"
        },
        english: {
            home: "Home",
            contact: "Contact",
            marquee: "TALK TO US"
        },
        italian: {
            home: "Inizio",
            contact: "Contatto",
            marquee: "PARLA CON NOI"
        }
    }

    return (
        <footer className="footerContainer">
            <div className="footer-topContainer">
                <div className="footer-smContainer">
                    {/* <a href="" target="_blank" rel="noopener noreferrer"><img src={linkeinLogo} alt="linkedin logo" /></a> */}
                    <a href="https://www.instagram.com/colorcopyag/?hl=es-la" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="facebook logo" /></a>
                    <a href="https://www.facebook.com/colorcopyag/?locale=es_LA" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="instagram logo" /></a>
                </div>
                <div className="footer-linksContainer">
                    <ul>
                        <li className="navLink-line-animation"><Link to="/">{translations[language].home}</Link></li>
                        {([...links[language]].splice(-1, 1), [...links[language]].slice(0, -1)).map((item, index) => (
                            <li className="navLink-line-animation" key={index}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        ))}
                        <li className="navLink-line-animation"><Link to={"/contact"}>{translations[language].contact}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-contactUs">
                {scrollingMarquee(translations[language].marquee)}
            </div>
            <div className="footer-copyright">
                <p>All rights reserved 2024 © Colorcopygroup</p>
            </div>
        </footer>
    )
}

export default Footer