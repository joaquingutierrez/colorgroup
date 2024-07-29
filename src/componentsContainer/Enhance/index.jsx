import "./style.css"
import { Button } from "../../components"
import useWindowSize from "../../customHooks/useWindowSize"

const Enhance = () => {

    const { width } = useWindowSize()

    return (
        <section className="enhanceContainer">
            <div className="enhance-textContainer">
                <h2>¡Descubra cómo podemos potenciar su negocio hoy mismo!</h2>
                <p>Estamos aquí para ayudarle a alcanzar sus objetivos.</p>
                {width < 1025 ? <button className="enchanceContainer-customButton">Empieza</button> : <Button title={"Empieza"} />}
            </div>
        </section>
    )
}

export default Enhance