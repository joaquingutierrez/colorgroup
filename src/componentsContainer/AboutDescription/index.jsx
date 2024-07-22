import "./style.css"
import AboutDescriptionImg from "../../assets/about/aboutDescription.png"

const AboutDescription = () => {

    return (
        <section className="aboutDescriptionContainer">
            <div className="aboutDescription-textContainer">
                <h2>ColorCopy es sinónimo de excelencia y calidad de atención.</h2>
                <h3>Nos enfocamos en el crecimiento de nuestros clientes.</h3>
                <p>Con más de 27 años de trayectoria, Color Copy es hoy una marca referente en el ámbito de gráfica y publicidad. Hemos trabajado en grandes proyectos junto a Tarjeta Naranja, Naranja X y la Municipalidad de Córdoba. También hemos creado la imagen de pequeños negocios y emprendimientos locales, siempre garantizando una excelente comunicación y un trabajo a la medida de cada cliente. </p>
                <p>Nuestro objetivo es impulsar el crecimiento de nuestros clientes para que ellos se conviertan en el mejor testimonio de la calidad de nuestro trabajo, asegurándonos en todo momento de que el resultado final de cada trabajo cumpla todas las expectativas que se planteen al momento de la contratación.</p>
            </div>
            <div className="aboutDescription-imgContainer">
                <div className="aboutDescription-imgContainer-whiteBox aboutDescription-imgContainer-whiteBox1"></div>
                <img loading="lazy" src={AboutDescriptionImg} alt="Personas trabajando con computadoras arriba de una mesa" />
                <div className="aboutDescription-imgContainer-whiteBox aboutDescription-imgContainer-whiteBox2"></div>
            </div>
        </section>
    )
}

export default AboutDescription