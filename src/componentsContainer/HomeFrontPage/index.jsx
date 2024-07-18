import "./style.css"
import VideoBG from "../../components/VideoBG"
import home_frontPageVideo from "../../assets/home/home_frontPageVideo.mp4"
import DiamondLogo from "../../components/DiamondLogo"

const HomeFrontPage = () => {

    return (
        <section className="homeFrontPageContainer">
            <div className="homeFrontPage-titleContainer">
                <h2>AGENCIA</h2>
            </div>
            <div className="homeFrontPage-videoTextContainer">
                <div className="homeFrontPage-videoContainer">
                    <VideoBG video={home_frontPageVideo} />
                </div>
                <ul className="homeFrontPage-listContainer">
                    <li>Calidad</li>
                    <li><DiamondLogo size={16} /></li>
                    <li>Creatividad</li>
                    <li><DiamondLogo size={16}/></li>
                    <li>Excelencia</li>
                </ul>
            </div>
            <div className="homeFrontPage-titleContainer">
                <h2>CREATIVA</h2>
            </div>
        </section>
    )
}

export default HomeFrontPage