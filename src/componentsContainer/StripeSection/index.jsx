import "./style.css"
import { Stripe } from "../../components"
import { useLanguage } from "../../context/languageContext"

const StripeSection = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            title: "Somos un grupo empresarial que ofrece soluciones integrales en comunicación visual, marketing y análisis financiero."
        },
        english: {
            title: "We are a business group that offers comprehensive solutions in visual communication, marketing and financial analysis."

        },
        italian: {
            title: "Siamo un gruppo aziendale che offre soluzioni complete di comunicazione visiva, marketing e analisi finanziaria."

        }
    }


    return (
        <section className="stripeSectionContainer">
            <h2>{translations[language].title}</h2>
            <Stripe />
        </section>
    )
}

export default StripeSection