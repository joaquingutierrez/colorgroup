import { useEffect, useState } from "react"

import "./style.css"
import VideoBG from "../../components/VideoBG"
import home_frontPageVideo from "../../assets/home/home_frontPageVideo.mp4"
import DiamondLogo from "../../components/DiamondLogo"
import useScroll from "../../customHooks/useScroll"
import useIntersectionObserver from "../../customHooks/useIntersectionObserver"
import { useLanguage } from "../../context/languageContext"

const HomeFrontPage = () => {

    const { language } = useLanguage()

    const [animationStart, setAnimationStart] = useState(false)
    const { isAtTop: isAtTopMarker1, elementRef: marker1Ref, scrollContainerRef } = useScroll()
    const isScrollContainerVisible = useIntersectionObserver(scrollContainerRef, { threshold: 0.9 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationStart(true)
        }, [1000])
        return () => clearTimeout(timer);
    }, [])

    const translations = {
        spanish: {
            title1: "AGENCIA",
            title2: "CREATIVA",
            item1: "Calidad",
            item2: "Creatividad",
            item3: "Excelencia"
        },
        english: {
            title1: "CREATIVE",
            title2: "AGENCY",
            item1: "Quality",
            item2: "Creativity",
            item3: "Excellence"
        },
        italian: {
            title1: "AGENZIA",
            title2: "CREATIVA",
            item1: "Qualità",
            item2: "Creatività",
            item3: "Eccellenza"
        }
    }

    return (
        <section ref={scrollContainerRef} className="homeFrontPageContainer">
            <div className="homeFrontPage-wrapper">
                <div className="homeFrontPage-wrapperInfo">
                    <div className={`homeFrontPage-titleContainer homeFrontPage-titleContainer1 ${animationStart ? "" : "homeFrontPage-titleContainer1-startPosition"}`}>
                        <h2>{translations[language].title1}</h2>
                    </div>
                    <div className={`homeFrontPage-videoContainer ${animationStart ? "" : "homeFrontPage-videoContainer-startPosition"} ${isAtTopMarker1 ? "homeFrontPage-videoContainer-setBigger" : ""} ${isScrollContainerVisible ? "" : "homeFrontPage-videoContainer-filter"}`}>
                        <VideoBG video={home_frontPageVideo} />
                    </div>
                    <div className="homeFrontPage-videoTextContainer">
                        <ul className={`homeFrontPage-listContainer ${animationStart ? "" : "homeFrontPage-listContainer-startPosition"}`}>
                            <li>{translations[language].item1}</li>
                            <li><DiamondLogo size={16} /></li>
                            <li>{translations[language].item2}</li>
                            <li><DiamondLogo size={16} /></li>
                            <li>{translations[language].item3}</li>
                        </ul>
                    </div>
                    <div className={`homeFrontPage-titleContainer homeFrontPage-titleContainer2 ${animationStart ? "" : "homeFrontPage-titleContainer2-startPosition"}`}>
                        <h2>{translations[language].title2}</h2>
                    </div>
                </div>
                <div ref={marker1Ref} className="homeFrontPage-marker1"></div>
            </div>
        </section >
    )
}

export default HomeFrontPage