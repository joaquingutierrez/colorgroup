import "./style.css"
import services_frontPage_video from "../../assets/services/services_frontPage.mp4"
import VideoBG from "../../components/VideoBG"

const ServicesFrontPage = () => {

    return (
        <section className="servicesFrontPageContainer">
            <VideoBG video={services_frontPage_video} />
            <h2 className="servicesFrontPage-title servicesFrontPage-title1 fadeIn-animation">NUESTROS</h2>
            <h2 className="servicesFrontPage-title servicesFrontPage-title2 fadeIn-animation">SERVICIOS</h2>
            <div className="servicesFrontPage-quoteContainer opacity-animation">
                <p className="servicesFrontPage-quote1">"Dar algo menos que lo mejor de ti es sacrificar el don."</p>
                <p className="servicesFrontPage-quote2">- Steve Prefontaine</p>
            </div>
        </section>
    )
}

export default ServicesFrontPage