import { useRef } from "react"

import "./style.css"
import altragraciaImg from "../../assets/home/ourClients/altagracia.png"
import altaviacionImg from "../../assets/home/ourClients/altaviacion.png"
import laportaImg from "../../assets/home/ourClients/laporta.png"
import naranjaxImg from "../../assets/home/ourClients/naranjax.png"
import potrerillodelarretaImg from "../../assets/home/ourClients/potrerillodelarreta.png"
import seaburyImg from "../../assets/home/ourClients/seabury.png"
import ucatolicadcordobaImg from "../../assets/home/ourClients/ucatolicadcordoba.png"
import useIntersectionObserver from "../../customHooks/useIntersectionObserver"


const HomeOurClients = () => {
    const clientsRef = useRef(null)
    const isVisible = useIntersectionObserver(clientsRef, { threshold: 0.7 })

    const ourClientsImgs = [
        altragraciaImg,
        altaviacionImg,
        laportaImg,
        naranjaxImg,
        potrerillodelarretaImg,
        seaburyImg,
        ucatolicadcordobaImg
    ]

    return (
        <section ref={clientsRef} className="homeOurClientesContainer">
            <h2>Nuestros Clientes</h2>
            <div className="homeOurClients-imgsContainer">
                {ourClientsImgs.map((item, index) => (
                    <div key={index} className={`homeOurClients-imgContainer ${isVisible ? "homeOurClients-imgContainer-animation" : ""}`}>
                        <img src={item} alt="Nuetro Cliente" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeOurClients