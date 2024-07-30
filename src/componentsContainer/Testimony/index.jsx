import "./style.css"
import { VideoBG } from "../../components"
import testimonyVideo from "../../assets/about/testimony_video.mp4"
import starLogo from "../../assets/logos/star.png"
import { useLanguage } from "../../context/languageContext"

const Testimony = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            desc: '"Desde el principio, se involucraron completamente y entendieron perfectamente nuestra visión. Al final, no solo quedé encantada con el resultado, sino que acepté cada cambio que sugirieron, confiando plenamente en su experiencia y habilidades."',
        },
        english: {
            desc: '"From the beginning, they were fully involved and understood our vision perfectly. In the end, I was not only delighted with the result, but I embraced every change they suggested, fully trusting their experience and skills."',
        },
        italian: {
            desc: '“Fin dall’inizio sono stati completamente coinvolti e hanno capito perfettamente la nostra visione. Alla fine non solo sono rimasto contentissimo del risultato, ma ho accettato ogni modifica che mi hanno suggerito, fidandomi pienamente sulla sua esperienza e capacità."',
        }
    }

    return (
        <section className="testimonyContainer">
            <VideoBG video={testimonyVideo} />
            <div className="image-overlay"></div>
            <div className="testimony-infoContainer">
                <div className="testimony-starsContainer">
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                    <img src={starLogo} alt="Estrella" />
                </div>
                <div className="testimony-textContainer">
                    <p className="testimony-text-quote">{translations[language].desc}</p>
                    <p className="testimony-text-quote2">- María García, Cliente Satisfecha</p>
                </div>
            </div>
        </section>
    )
}

export default Testimony