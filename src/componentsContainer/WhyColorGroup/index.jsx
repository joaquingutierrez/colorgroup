import "./style.css"
import WhyColorGroupImg from "../../assets/services/whyColorGroup.png"
import { useLanguage } from "../../context/languageContext"

const WhyColorGroup = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            title: "¿POR QUÉ ELEGIR COLORGROUP?",
            items: [
                {
                    title: "Experiencia y conocimiento",
                    desc: "Con más de 27 años en el sector, contamos con un equipo de profesionales altamente cualificados y en constante formación."
                },
                {
                    title: "Soluciones integrales",
                    desc: "Ofrecemos un servicio completo que cubre todas sus necesidades de comunicación visual, marketing y análisis financiero, utilizando siempre las últimas tecnologías."
                },
                {
                    title: "Compromiso con la calidad",
                    desc: "Nos dedicamos a proporcionar servicios de alta calidad y garantizar la satisfacción de nuestros clientes."
                }
            ]
        },
        english: {
            title: "WHY CHOOSE COLORGROUP?",
            items: [
                {
                    title: "Experience and knowledge",
                    desc: "With more than 27 years in the sector, we have a team of highly qualified professionals who are constantly training."
                },
                {
                    title: "Comprehensive solutions",
                    desc: "We offer a complete service that covers all your visual communication, marketing and financial analysis needs, always using the latest technologies."
                },
                {
                    title: "Commitment to quality",
                    desc: "We are dedicated to providing high quality services and ensuring the satisfaction of our clients."
                }
            ]
        },
        italian: {
            title: "PERCHÉ SCEGLIERE COLORGRUPPO?",
            items: [
                {
                    title: "Esperienza e conoscenza",
                    desc: "Con più di 27 anni nel settore, disponiamo di un team di professionisti altamente qualificati in costante formazione."
                },
                {
                    title: "Soluzioni",
                    desc: "Offriamo un servizio completo che copre tutte le vostre esigenze di comunicazione visiva, marketing e analisi finanziaria, utilizzando sempre le tecnologie più recenti."
                },
                {
                    title: "Impegno per la qualità",
                    desc: "Ci impegniamo a fornire servizi di alta qualità e a garantire la soddisfazione dei nostri clienti."
                }
            ]
        }
    }

    return (
        <section className="whyColorGroupContainer">
            <img src={WhyColorGroupImg} alt="Fondo Azul" />
            <div className="whyColor-contentContainer">
                <h2>{translations[language].title}</h2>
                <ol>
                    <li>
                        <div>
                            <h3>{translations[language].items[0].title}</h3>
                            <p>{translations[language].items[0].desc}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>{translations[language].items[1].title}</h3>
                            <p>{translations[language].items[1].desc}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>{translations[language].items[2].title}</h3>
                            <p>{translations[language].items[2].desc}</p>
                        </div>
                    </li>
                </ol>
            </div>
            <div className="whyColorGroup-verticalLine"></div>
        </section>
    )
}

export default WhyColorGroup