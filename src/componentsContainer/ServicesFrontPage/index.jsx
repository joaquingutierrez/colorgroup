import "./style.css"
import services_frontPage_video from "../../assets/services/services_frontPage.mp4"
import VideoBG from "../../components/VideoBG"
import { useLanguage } from "../../context/languageContext"

const ServicesFrontPage = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            title1: "NUESTROS",
            title2: "SERVICIOS",
            desc: '"Dar algo menos que lo mejor de ti es sacrificar el don."'
        },
        english: {
            title1: "OUR",
            title2: "SERVICES",
            desc: '"To give anything less than your best is to sacrifice the gift."'
        },
        italian: {
            title1: "I NOSTRI",
            title2: "SERVIZI",
            desc: '"Dare qualcosa di meno del proprio meglio significa sacrificare il dono."',
        }
    }

    return (
        <section className="servicesFrontPageContainer">
            <VideoBG video={services_frontPage_video} />
            <h2 className="servicesFrontPage-title servicesFrontPage-title1 fadeIn-animation">{translations[language].title1}</h2>
            <h2 className="servicesFrontPage-title servicesFrontPage-title2 fadeIn-animation">{translations[language].title2}</h2>
            <div className="servicesFrontPage-quoteContainer opacity-animation">
                <p className="servicesFrontPage-quote1">{translations[language].desc}</p>
                <p className="servicesFrontPage-quote2">- Steve Prefontaine</p>
            </div>
        </section>
    )
}

export default ServicesFrontPage