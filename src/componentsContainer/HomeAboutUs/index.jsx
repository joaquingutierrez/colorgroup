import { Link } from "react-router-dom"

import "./style.css"
import useScroll from "../../customHooks/useScroll"
import VideoBG from "../../components/VideoBG"
import home_aboutUsVideo from "../../assets/home/aboutUs/home_aboutUsVideo.mp4"
import useWindowSize from "../../customHooks/useWindowSize"

const HomeAboutUs = () => {

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

    return (
        <section className="homeAboutUsContainer">
            {width < 835 ? (
                <>
                    <div>
                        <ul>
                            <li>
                                <h3>Paquetes de Servicios a Medida</h3>
                                <p>Solución integral para diseño, marketing y producción, todo en un solo lugar.</p>
                            </li>
                            <li>
                                <h3>Soluciones Escalables</h3>
                                <p>Ajusta tus servicios sin recargos ni trámites a medida que tu empresa crece.</p>
                            </li>
                            <li>
                                <h3>Servicio Personalizado</h3>
                                <p>Comunicación directa con profesionales para cumplir tus expectativas.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="aboutUsVideoContainer">
                        <VideoBG video={home_aboutUsVideo} />
                        <div className="aboutUsVideoContainer-textContainer">
                            <h2>Transformamos tus ideas en creatividad visual</h2>
                            <p>Estamos aquí para potenciar tu presencia, mejorar tu impacto y llevar tu marca al siguiente nivel. Con pasión y dedicación, convertimos tus sueños en realidad visual.</p>
                        </div>
                        <div className="aboutUsVideoContainer-linkContainer">
                        <Link>Sobre Nosotros</Link>
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
                                            <h2>TRANSFORMAMOS TUS IDEAS EN CREATIVIDAD VISUAL</h2>
                                            <p>Estamos aquí para potenciar tu presencia, mejorar tu impacto y llevar tu marca al siguiente nivel. Con pasión y dedicación, convertimos tus sueños en realidad visual.</p>
                                        </div>
                                        <Link><span className="homeAutoUs-video-textContainer-link">Sobre Nostros</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="homeAboutUs-itemContainer">
                                <h3 className={`homeAboutUs-item-title ${isAtTopMarker1 ? "homeAboutUs-item-elementFadeIn" : ""}`}>Paquetes de Servicios a Medida</h3>
                                <p className={`homeAboutUs-item-desc ${isAtTopMarker2 ? "homeAboutUs-item-elementFadeIn" : ""}`}>Solución integral para diseño, marketing y producción, todo en un solo lugar.</p>
                            </div>
                            <div className="homeAboutUs-itemContainer">
                                <h3 className={`homeAboutUs-item-title ${isAtTopMarker3 ? "homeAboutUs-item-elementFadeIn" : ""}`}>Soluciones Escalables</h3>
                                <p className={`homeAboutUs-item-desc ${isAtTopMarker4 ? "homeAboutUs-item-elementFadeIn" : ""}`}>Ajusta tus servicios sin recargos ni trámites a medida que tu empresa crece.</p>
                            </div>
                            <div className="homeAboutUs-itemContainer">
                                <h3 className={`homeAboutUs-item-title ${isAtTopMarker5 ? "homeAboutUs-item-elementFadeIn" : ""}`}>Servicio Personalizado</h3>
                                <p className={`homeAboutUs-item-desc ${isAtTopMarker6 ? "homeAboutUs-item-elementFadeIn" : ""}`}>Comunicación directa con profesionales para cumplir tus expectativas.</p>
                            </div>
                        </div>
                    </>
                )}
        </section>
    )
}

export default HomeAboutUs