import "./style.css"
import aboutVideoBG from "../../assets/frontPage/about.mp4"
import { VideoBG } from "../../components"
import { useLanguage } from "../../context/languageContext"

const AboutFrontPage = () => {

    const {language} = useLanguage()

    const translations = {
        spanish: {
            title1: "SOBRE",
            title2: "NOSOTROS",
            desc: '"Las grandes cosas no se hacen por impulso, sino por una serie de pequeñas cosas reunidas."'
        },
        english: {
            title1: "ABOUT",
            title2: "US",
            desc: '"Great things are not done on impulse, but by a series of small things put together."'
        },
        italian: {
            title1: "CHI",
            title2: "SIAMO",
            desc: '"Le grandi cose non si fanno per impulso, ma per una serie di piccole cose messe insieme."'
        }
    }

    return (
        <section className="aboutFrontPageContainer">
            <VideoBG video={aboutVideoBG} />
            <h2 className="aboutFrontPage-title aboutFrontPage-title1 fadeIn-animation">{translations[language].title1}</h2>
            <h2 className="aboutFrontPage-title aboutFrontPage-title2 fadeIn-animation">{translations[language].title2}</h2>
            <div className="aboutFrontPage-quoteContainer opacity-animation">
                <p className="aboutFrontPage-quote1">{translations[language].desc}</p>
                <p className="aboutFrontPage-quote2">- Vincent van Gogh</p>
            </div>
        </section>
    )
}

export default AboutFrontPage