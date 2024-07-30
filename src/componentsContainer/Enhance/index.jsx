import "./style.css"
import { Button } from "../../components"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"

const Enhance = () => {

    const { language } = useLanguage()

    const { width } = useWindowSize()

    const translations = {
        spanish: {
            title: "¡Descubra cómo podemos potenciar su negocio hoy mismo!",
            desc: "Estamos aquí para ayudarle a alcanzar sus objetivos.",
            buttonTitle: "Empieza"
        },
        english: {
            title: "Find out how we can boost your business today!",
            desc: "We are here to help you achieve your goals.",
            buttonTitle: "Get started"
        },
        italian: {
            title: "Scopri come possiamo potenziare il tuo business oggi!",
            desc: "Siamo qui per aiutarti a raggiungere i tuoi obiettivi.",
            buttonTitle: "Inizio"
        }
    }

    return (
        <section className="enhanceContainer">
            <div className="enhance-textContainer">
                <h2>{translations[language].title}</h2>
                <p>{translations[language].desc}</p>
                {width < 1025 ? <button className="enchanceContainer-customButton">Empieza</button> : <Button title={translations[language].buttonTitle} />}
            </div>
        </section>
    )
}

export default Enhance