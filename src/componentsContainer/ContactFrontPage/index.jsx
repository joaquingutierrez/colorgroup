import "./style.css"
import contactFrontPage from "../../assets/frontPage/contact.png"
import { useLanguage } from "../../context/languageContext"

const ContactFrontPage = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            title1: "ENVÍANOS",
            title2: "UN MENSAJE",
            desc: "Contáctenos hoy mismo para comenzar a transformar su visión en realidad. Estamos aquí para ayudarles en cada paso del camino."
        },
        english: {
            title1: "SEND US",
            title2: "A MESSAGE",
            desc: "Contact us today to start turning your vision into reality. We are here to help you every step of the way."
        },
        italian: {
            title1: "INVIACI",
            title2: "UN MESSAGGIO",
            desc: "Contattaci oggi per iniziare a trasformare la tua visione in realtà. Siamo qui per aiutarti in ogni fase del percorso."
        }
    }

    return (
        <section className="contactFrontPageContainer">
            <img className="contactFrontPage-bg" src={contactFrontPage} alt="Contact Front Page" />
            <h2 className="contactFrontPage-title1 fadeIn-animation">{translations[language].title1}</h2>
            <h2 className="contactFrontPage-title2 fadeIn-animation">{translations[language].title2}</h2>
            <p className="contactFrontPage-p opacity-animation">{translations[language].desc}</p>
        </section>
    )
}

export default ContactFrontPage