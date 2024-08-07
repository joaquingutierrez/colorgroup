import "./style.css"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"
import ubicationLogo from "../../assets/logos/ubication_logo.png"

const Ubication = () => {

    const { language } = useLanguage()

    const { width } = useWindowSize()

    const translations = {
        spanish: {
            title: "Nuestra Ubicación",
            subTitle: "¡Te invitamos a conocernos en persona y descubrir cómo podemos ayudarte a alcanzar tus metas digitales!",
            days1: "Lunes - Viernes",
            days2: "Sábado"
        },
        english: {
            title: "Our Location",
            subTitle: "We invite you to meet us in person and discover how we can help you achieve your digital goals!",
            days1: "Monday - Friday",
            days2: "Saturday"
        },
        italian: {
            title: "Nostra posizione",
            subTitle: "Ti invitiamo a incontrarci di persona e scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi digitali!",
            days1: "lunedì - venerdì",
            days2: "Sabato"
        }
    }

    return (
        <section className="ubicationContainer">
            <div className="ubication-textContainer">
                <h2>{translations[language].title}</h2>
                <h3>{translations[language].subTitle}</h3>
                {width < 800 &&
                    <div className="ubication-mapContainer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1656163245348!2d-64.4277015!3d-31.656688400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d57358c719319%3A0xbe6cf79a346953a!2sDr.%20Ra%C3%BAl%20Alfons%C3%ADn%20151%2C%20Alta%20Gracia%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1720615281605!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                <div>
                    <h4>Raúl Alfonsín 157, Alta Gracia Córdoba <img src={ubicationLogo} alt="Ubicacion" /></h4>
                    <h4>Strada di Colle Oliveto 17 Narni • Terni Italia <img src={ubicationLogo} alt="Ubicacion" /></h4>
                    
                    <div>
                        <h4>{translations[language].days1}</h4>
                        <p>9:00 AM - 1:00 PM</p>
                        <p>14:00 PM - 18:00 PM</p>
                        <h4>{translations[language].days2}</h4>
                        <p>9:00 AM - 1:00 PM</p>
                    </div>
                </div>
            </div>
            {width >= 801 &&
                <div className="ubication-mapContainer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1656163245348!2d-64.4277015!3d-31.656688400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d57358c719319%3A0xbe6cf79a346953a!2sDr.%20Ra%C3%BAl%20Alfons%C3%ADn%20151%2C%20Alta%20Gracia%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1720615281605!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            }

        </section>
    )
}

export default Ubication