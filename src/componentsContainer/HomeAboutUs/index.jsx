import { Link } from "react-router-dom"

import "./style.css"
import useScroll from "../../customHooks/useScroll"
import VideoBG from "../../components/VideoBG"
import home_aboutUsVideo from "../../assets/home/aboutUs/home_aboutUsVideo.mp4"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"

const HomeAboutUs = () => {

    const { language } = useLanguage()

    const { width } = useWindowSize();

    const { isAtTop: isAtTopMarker1, elementRef: marker1Ref } = useScroll()
    const { isAtTop: isAtTopMarker2, elementRef: marker2Ref } = useScroll()
    const { isAtTop: isAtTopMarker3, elementRef: marker3Ref } = useScroll()
    const { isAtTop: isAtTopMarker4, elementRef: marker4Ref } = useScroll()
    const { isAtTop: isAtTopMarker5, elementRef: marker5Ref } = useScroll()
    const { isAtTop: isAtTopMarker6, elementRef: marker6Ref } = useScroll()
    const { isAtTop: isAtTopMarker7, elementRef: marker7Ref } = useScroll()
    const { isAtTop: isAtTopMarker8, elementRef: marker8Ref } = useScroll()
    const { isAtTop: isAtTopMarker9, elementRef: marker9Ref } = useScroll()

    const translations = {
        spanish: {
            title: "Transformamos tus ideas en creatividad visual",
            desc: "Estamos aquí para potenciar tu presencia, mejorar tu impacto y llevar tu marca al siguiente nivel. Con pasión y dedicación, convertimos tus sueños en realidad visual.",
            items: [
                {
                    title: "Paquetes de Servicios a Medida",
                    desc: "Solución integral para diseño, marketing y producción, todo en un solo lugar."
                },
                {
                    title: "Soluciones Escalables",
                    desc: "Ajusta tus servicios sin recargos ni trámites a medida que tu empresa crece."
                },
                {
                    title: "Servicio Personalizado",
                    desc: "Comunicación directa con profesionales para cumplir tus expectativas."
                }
            ],
            buttonTitle: "Sobre Nosotros"
        },
        english: {
            title: "WE TRANSFORM YOUR IDEAS INTO VISUAL CREATIVITY",
            desc: "We are here to boost your presence, improve your impact and take your brand to the next level. With passion and dedication, we turn your dreams into visual reality.",
            items: [
                {
                    title: "Custom Service Packages",
                    desc: "Comprehensive solution for design, marketing and production, all in one place."
                },
                {
                    title: "Scalable Solutions",
                    desc: "Adjust your services without surcharges or paperwork as your company grows."
                },
                {
                    title: "Personalized Service",
                    desc: "Direct communication with professionals to meet your expectations."
                }
            ],
            buttonTitle: "About Us"
        },
        italian: {
            title: "TRASFORMIAMO LE VOSTRE IDEE NELLA CREATIVITÀ VISIVA",
            desc: "Siamo qui per migliorare la tua presenza, migliorare il tuo impatto e portare il tuo marchio al livello successivo. Con passione e dedizione trasformiamo i tuoi sogni in realtà visiva.",
            items: [
                {
                    title: "Pacchetti di servizi su misura",
                    desc: "Soluzione completa per progettazione, marketing e produzione, tutto in un unico posto."
                },
                {
                    title: "Soluzioni scalabili",
                    desc: "Modifica i tuoi servizi senza costi o pratiche burocratiche man mano che la tua attività cresce."
                },
                {
                    title: "Servizio personalizzato",
                    desc: "Comunicazione diretta con professionisti per soddisfare le vostre aspettative."
                }
            ],
            buttonTitle: "Chi siamo"
        }
    }

    return (
        <section className="homeAboutUsContainer">
            {width < 1026 ? (
                <>
                    <ul>
                        <li>
                            <h3>{translations[language].items[0].title}</h3>
                            <p>{translations[language].items[0].desc}</p>
                        </li>
                        <li>
                            <h3>{translations[language].items[1].title}</h3>
                            <p>{translations[language].items[1].desc}</p>
                        </li>
                        <li>
                            <h3>{translations[language].items[2].title}</h3>
                            <p>{translations[language].items[2].desc}</p>
                        </li>
                    </ul>
                    <div className="aboutUsVideoContainer">
                        <VideoBG video={home_aboutUsVideo} />
                        <div className="aboutUsVideoContainer-textContainer">
                            <h2>{translations[language].title}</h2>
                            <p>{translations[language].desc}</p>
                        </div>
                        <div className="aboutUsVideoContainer-linkContainer">
                            <Link>{translations[language].buttonTitle}</Link>
                        </div>
                    </div>
                </>
            )
                :
                (
                    <>
                        <div className="homeAboutUsMarkerContainer">
                            <div ref={marker1Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker2Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker3Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker4Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker5Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker6Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker7Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker8Ref} className="homeAboutUsMarker"></div>
                            <div ref={marker9Ref} className="homeAboutUsMarker"></div>
                        </div>
                        <div className="homeAboutUs-itemsContainer">
                            <div className={`homeAboutUs-items-ball 
                    ${isAtTopMarker1 ? "homeAboutUs-items-ball-firstPosition" : ""} 
                    ${isAtTopMarker3 ? "homeAboutUs-items-ball-secondPosition" : ""} 
                    ${isAtTopMarker5 ? "homeAboutUs-items-ball-thirdPosition" : ""}
                    ${isAtTopMarker7 ? "homeAboutUs-items-ball-expand" : ""}
                    `}>
                                <div className={`homeAboutUs-items-videoWrapper ${isAtTopMarker9 ? "homeAboutUs-items-video-invert" : ""}`}>
                                    <VideoBG video={home_aboutUsVideo} />
                                    <div className={`homeAboutUs-items-video-textContainer ${isAtTopMarker7 ? "homeAboutUs-items-video-textContainer-fadeIn" : ""}`}>
                                        <div className="homeAboutUs-items-video-textContainer-info">
                                            <h2>{translations[language].title}</h2>
                                            <p>{translations[language].desc}</p>
                                        </div>
                                        <Link><span className="homeAutoUs-video-textContainer-link">{translations[language].buttonTitle}</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="homeAboutUs-itemContainer">
                                <h3 className={`homeAboutUs-item-title ${isAtTopMarker1 ? "homeAboutUs-item-elementFadeIn" : ""}`}>{translations[language].items[0].title}</h3>
                                <p className={`homeAboutUs-item-desc ${isAtTopMarker2 ? "homeAboutUs-item-elementFadeIn" : ""}`}>{translations[language].items[0].desc}</p>
                            </div>
                            <div className="homeAboutUs-itemContainer">
                                <h3 className={`homeAboutUs-item-title ${isAtTopMarker3 ? "homeAboutUs-item-elementFadeIn" : ""}`}>{translations[language].items[1].title}</h3>
                                <p className={`homeAboutUs-item-desc ${isAtTopMarker4 ? "homeAboutUs-item-elementFadeIn" : ""}`}>{translations[language].items[1].desc}</p>
                            </div>
                            <div className="homeAboutUs-itemContainer">
                                <h3 className={`homeAboutUs-item-title ${isAtTopMarker5 ? "homeAboutUs-item-elementFadeIn" : ""}`}>{translations[language].items[2].title}</h3>
                                <p className={`homeAboutUs-item-desc ${isAtTopMarker6 ? "homeAboutUs-item-elementFadeIn" : ""}`}>{translations[language].items[2].desc}</p>
                            </div>
                        </div>
                    </>
                )}
        </section>
    )
}

export default HomeAboutUs