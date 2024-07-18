import { useEffect, useState } from "react"

import "./style.css"
import VideoBG from "../../components/VideoBG"
import home_frontPageVideo from "../../assets/home/home_frontPageVideo.mp4"
import DiamondLogo from "../../components/DiamondLogo"

const HomeFrontPage = () => {

    const [animationStart, setAnimationStart] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationStart(true)
        }, [1000])
        return () => clearTimeout(timer);
    }, [])

    return (
        <section className="homeFrontPageContainer">
            <div className={`homeFrontPage-titleContainer homeFrontPage-titleContainer1 ${animationStart ? "" : "homeFrontPage-titleContainer1-startPosition"}`}>
                <h2>AGENCIA</h2>
            </div>
            <div className="homeFrontPage-videoTextContainer">
                <div className={`homeFrontPage-videoContainer ${animationStart ? "" : "homeFrontPage-videoContainer-startPosition"}`}>
                    <VideoBG video={home_frontPageVideo} />
                </div>
                <ul className={`homeFrontPage-listContainer ${animationStart ? "" : "homeFrontPage-listContainer-startPosition"}`}>
                    <li>Calidad</li>
                    <li><DiamondLogo size={16} /></li>
                    <li>Creatividad</li>
                    <li><DiamondLogo size={16}/></li>
                    <li>Excelencia</li>
                </ul>
            </div>
            <div className={`homeFrontPage-titleContainer homeFrontPage-titleContainer2 ${animationStart ? "" : "homeFrontPage-titleContainer2-startPosition"}`}>
                <h2>CREATIVA</h2>
            </div>
        </section >
    )
}

export default HomeFrontPage