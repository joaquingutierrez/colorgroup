import "./style.css"
import WhyColorGroupImg from "../../assets/services/whyColorGroup.png"

const WhyColorGroup = () => {

    return (
        <section className="whyColorGroupContainer">
            <img src={WhyColorGroupImg} alt="Fondo Azul" />
            <h2>¿POR QUÉ ELEGIR COLORGROUP?</h2>
            <ol>
                <li>
                    <div>
                        <h3>Experiencia y conocimiento</h3>
                        <p>Con más de 27 años en el sector, contamos con un equipo de profesionales altamente cualificados y en constante formación.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Soluciones integrales</h3>
                        <p>Ofrecemos un servicio completo que cubre todas sus necesidades de comunicación visual, marketing y análisis financiero, utilizando siempre las últimas tecnologías.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Compromiso con la calidad</h3>
                        <p>Nos dedicamos a proporcionar servicios de alta calidad y garantizar la satisfacción de nuestros clientes.</p>
                    </div>
                </li>
            </ol>
            <div className="whyColorGroup-verticalLine"></div>
        </section>
    )
}

export default WhyColorGroup