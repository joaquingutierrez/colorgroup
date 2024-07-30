import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./style.css"
import useScroll from "../../customHooks/useScroll"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"


const HomeGallery = ({imgs}) => {

    const { language } = useLanguage()

    const { width } = useWindowSize()

    const { isAtTop, elementRef } = useScroll()
    const [animationTransition, setAnimationTransition] = useState(false)

    useEffect(() => {
        let timeoutId;
        if (isAtTop && elementRef.current) {
            // Obtener las coordenadas del div objetivo
            const rect = elementRef.current.getBoundingClientRect();
            // Calcular la posición actual del scroll y sumar la posición del div
            const scrollTop = document.documentElement.scrollTop;
            const targetPosition = rect.top + scrollTop + 20; // Ajusta el desplazamiento según sea necesario

            // Desplazarse a la posición del div

            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            timeoutId = setTimeout(() => {
                document.body.style.overflow = originalStyle;
                window.scrollTo({
                    top: targetPosition
                });
                setAnimationTransition(true)
            }, 400); // Mantener el scroll bloqueado por el tiempo deseado
        } else {
            setAnimationTransition(false)
        }

        return () => {
            clearTimeout(timeoutId);
            document.body.style.overflow = ''; // Restaurar el overflow original
        };
    }, [isAtTop, elementRef]);

    const translations = {
        spanish: {
            title: "Un ecosistema integral de soluciones",
            desc: "Puedes elegir cada uno de los servicios que consideres necesarios para tu estrategia, garantizando una sólida línea editorial para toda tu estrategia publicitaria, tanto en el entorno digital como en el entorno gráfico.",
            buttonTitle: "Nosotros Servicios"
        },
        english: {
            title: "AN INTEGRAL ECOSYSTEM OF SOLUTIONS",
            desc: "You can choose each of the services that you consider necessary for your strategy, guaranteeing a solid editorial line for your entire advertising strategy, both in the digital environment and in the graphic environment.",
            buttonTitle: "Our Services"
        },
        italian: {
            title: "UN ECOSISTEMA COMPLETO DI SOLUZIONI",
            desc: "Puoi scegliere ciascuno dei servizi che ritieni necessari per la tua strategia, garantendoti una solida linea editoriale per tutta la tua strategia pubblicitaria, sia in ambiente digitale che in ambiente grafico.",
            buttonTitle: "I nostri servizi"
        }
    }


    const renderGallery = () => {
        return imgs.map((img, index) => {
            const galleryColumns = 3
            let positionClass = '';

            if (index === imgs.length - 1 && imgs.length % galleryColumns !== 0) {
                positionClass = 'homeGallery-imgContainer-centerPosition';
            } else if (index % galleryColumns === 0) {
                positionClass = 'homeGallery-imgContainer-leftPosition';
            } else if (index % galleryColumns === 1) {
                if (index === 4) {
                    positionClass = 'homeGallery-imgContainer-centerPositionBG';
                } else {
                    positionClass = 'homeGallery-imgContainer-centerPosition';
                }
            } else {
                positionClass = 'homeGallery-imgContainer-rightPosition';
            }

            return (
                <div key={index} className={`homeGallery-imgContainer ${positionClass}`}>
                    <img src={img} alt="Imagen de la galería" />
                </div>
            );
        });
    };


    return (
        <section className="homeGallerySectionContainer">
            {width < 1026 ? (<>
                <img src={imgs[4]} alt="" />
                <div className="homeGallerySectionContainer-infoContainer">
                    <h2>{translations[language].title}</h2>
                    <p>{translations[language].desc}</p>
                </div>
                <div className="homeGallerySectionContainer-linkContainer">
                    <Link>{translations[language].buttonTitle}</Link>
                </div>
            </>) :
                (<>
                    <div className={`homeGalleryBanner ${animationTransition ? "homeGalleryBanner-transition" : ""}`}>
                        <div className={`homeGalleryBanner-textContainer ${isAtTop ? "homeGalleryBanner-textContainer-transition" : ""}`}>
                            <h2>{translations[language].title}</h2>
                            <p>{translations[language].desc}</p>
                            <Link to={"/services"}><span>{translations[language].buttonTitle}</span></Link>
                        </div>
                        <img src={imgs[4]} alt="" />
                    </div>
                    <div className="homeGalleryContainer">
                        <div ref={elementRef} className="homeGalleryWrapper">
                            {renderGallery()}
                        </div>
                    </div>
                </>)}
        </section>
    )
}

export default HomeGallery