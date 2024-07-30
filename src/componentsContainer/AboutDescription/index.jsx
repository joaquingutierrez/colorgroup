import "./style.css"
import AboutDescriptionImg from "../../assets/about/aboutDescription.png"
import { useLanguage } from "../../context/languageContext"

const AboutDescription = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            title: "ColorCopy es sinónimo de excelencia y calidad de atención.",
            subTitle: "Nos enfocamos en el crecimiento de nuestros clientes.",
            desc1: "Con más de 27 años de trayectoria, Color Copy es hoy una marca referente en el ámbito de gráfica y publicidad. Hemos trabajado en grandes proyectos junto a Tarjeta Naranja, Naranja X y la Municipalidad de Córdoba. También hemos creado la imagen de pequeños negocios y emprendimientos locales, siempre garantizando una excelente comunicación y un trabajo a la medida de cada cliente.",
            desc2: "Nuestro objetivo es impulsar el crecimiento de nuestros clientes para que ellos se conviertan en el mejor testimonio de la calidad de nuestro trabajo, asegurándonos en todo momento de que el resultado final de cada trabajo cumpla todas las expectativas que se planteen al momento de la contratación."
        },
        english: {
            title: "COLORCOPY IS SYNONYMOUS WITH EXCELLENCE AND QUALITY OF SERVICE.",
            subTitle: "We focus on the growth of our clients.",
            desc1: "With more than 27 years of experience, Color Copy is today a leading brand in the field of graphics and advertising. We have worked on large projects with Tarjeta Naranja, Naranja X and the Municipality of Córdoba. We have also created the image of small businesses and local ventures, always guaranteeing excellent communication and work tailored to each client.",
            desc2: "Our goal is to promote the growth of our clients so that they become the best testimony of the quality of our work, ensuring at all times that the final result of each job meets all the expectations set at the time of contracting."
        },
        italian: {
            title: "COLORCOPY È SINONIMO DI ECCELLENZA E QUALITÀ DELLE CURA.",
            subTitle: "Ci concentriamo sulla crescita dei nostri clienti.",
            desc1: "Con più di 27 anni di esperienza, Color Copy è oggi un marchio leader nel campo della grafica e della pubblicità. Abbiamo lavorato su grandi progetti insieme a Carretera Naranja, Naranja X e al Comune di Córdoba. Abbiamo creato anche l'immagine delle piccole imprese e delle imprese locali, garantendo sempre un'ottima comunicazione e un lavoro su misura per ogni cliente.",
            desc2: "Il nostro obiettivo è promuovere la crescita dei nostri clienti affinché diventino la migliore testimonianza della qualità del nostro lavoro, garantendo in ogni momento che il risultato finale di ogni lavoro soddisfi tutte le aspettative sollevate al momento della stipula del contratto."
        }
    }

    return (
        <section className="aboutDescriptionContainer">
            <div className="aboutDescription-textContainer">
                <h2>{translations[language].title}</h2>
                <h3>{translations[language].subTitle}</h3>
                <p>{translations[language].desc1}</p>
                <p>{translations[language].desc2}</p>
            </div>
            <div className="aboutDescription-imgContainer">
                <div className="aboutDescription-imgContainer-whiteBox aboutDescription-imgContainer-whiteBox1"></div>
                <img loading="lazy" src={AboutDescriptionImg} alt="Personas trabajando con computadoras arriba de una mesa" />
                <div className="aboutDescription-imgContainer-whiteBox aboutDescription-imgContainer-whiteBox2"></div>
            </div>
        </section>
    )
}

export default AboutDescription