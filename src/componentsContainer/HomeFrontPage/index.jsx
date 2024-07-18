import { useEffect, useState } from "react"

import "./style.css"
import VideoBG from "../../components/VideoBG"
import home_frontPageVideo from "../../assets/home/home_frontPageVideo.mp4"
import DiamondLogo from "../../components/DiamondLogo"
import useScroll from "../../customHooks/useScroll"
import useIntersectionObserver from "../../customHooks/useIntersectionObserver"

const HomeFrontPage = () => {

    const [animationStart, setAnimationStart] = useState(false)
    const { isAtTop: isAtTopMarker1, elementRef: marker1Ref, scrollContainerRef } = useScroll()
    const isScrollContainerVisible = useIntersectionObserver(scrollContainerRef, { threshold: 0.9 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationStart(true)
        }, [1000])
        return () => clearTimeout(timer);
    }, [])

    return (
        <section ref={scrollContainerRef} className="homeFrontPageContainer">
            <div className="homeFrontPage-wrapper">
                <div className="homeFrontPage-wrapperInfo">
                    <div className={`homeFrontPage-titleContainer homeFrontPage-titleContainer1 ${animationStart ? "" : "homeFrontPage-titleContainer1-startPosition"}`}>
                        <h2>AGENCIA</h2>
                    </div>
                    <div className={`homeFrontPage-videoContainer ${animationStart ? "" : "homeFrontPage-videoContainer-startPosition"} ${isAtTopMarker1 ? "homeFrontPage-videoContainer-setBigger" : ""} ${isScrollContainerVisible ? "" : "homeFrontPage-videoContainer-filter"}`}>
                        <VideoBG video={home_frontPageVideo} />
                    </div>
                    <div className="homeFrontPage-videoTextContainer">
                        <ul className={`homeFrontPage-listContainer ${animationStart ? "" : "homeFrontPage-listContainer-startPosition"}`}>
                            <li>Calidad</li>
                            <li><DiamondLogo size={16} /></li>
                            <li>Creatividad</li>
                            <li><DiamondLogo size={16} /></li>
                            <li>Excelencia</li>
                        </ul>
                    </div>
                    <div className={`homeFrontPage-titleContainer homeFrontPage-titleContainer2 ${animationStart ? "" : "homeFrontPage-titleContainer2-startPosition"}`}>
                        <h2>CREATIVA</h2>
                    </div>
                </div>
                <div ref={marker1Ref} className="homeFrontPage-marker1"></div>
            </div>
        </section >
    )
}

export default HomeFrontPage