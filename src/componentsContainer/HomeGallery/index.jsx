import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./style.css"
import image1 from "../../assets/home/gallery/image1.png"
import image2 from "../../assets/home/gallery/image2.png"
import image3 from "../../assets/home/gallery/image3.png"
import image4 from "../../assets/home/gallery/image4.png"
import image5 from "../../assets/home/gallery/image5.png"
import image6 from "../../assets/home/gallery/image6.png"
import image7 from "../../assets/home/gallery/image7.png"
import useScroll from "../../customHooks/useScroll"
import useWindowSize from "../../customHooks/useWindowSize"


const HomeGallery = () => {

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

    const imgs = [
        image1,
        image2,
        image3,
        image4,
        image6,
        image5,
        image7
    ]


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
                    <h2>Un ecosistema integral de soluciones</h2>
                    <p>Puedes elegir cada uno de los servicios que consideres necesarios para tu estrategia, garantizando una sólida línea editorial para toda tu estrategia publicitaria, tanto en el entorno digital como en el entorno gráfico.</p>
                </div>
                <div className="homeGallerySectionContainer-linkContainer">
                    <Link>Nosotros Servicios</Link>
                </div>
            </>) :
                (<>
                    <div className={`homeGalleryBanner ${animationTransition ? "homeGalleryBanner-transition" : ""}`}>
                        <div className={`homeGalleryBanner-textContainer ${isAtTop ? "homeGalleryBanner-textContainer-transition" : ""}`}>
                            <h2>UN ECOSISTEMA INTEGRAL DE SOLUCIONES</h2>
                            <p>Puedes elegir cada uno de los servicios que consideres necesarios para tu estrategia, garantizando una sólida línea editorial para toda tu estrategia publicitaria, tanto en el entorno digital como en el entorno gráfico.</p>
                            <Link to={"/services"}><span>Nuestros Servicios</span></Link>
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