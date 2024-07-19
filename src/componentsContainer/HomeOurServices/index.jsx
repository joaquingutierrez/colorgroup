import "./style.css"
import { ItemsGallery } from "../../components"
import graficaImg from "../../assets/home/ourServices/grafica.png"
import dis_webImg from "../../assets/home/ourServices/dis_web.png"
import dis_graficoImg from "../../assets/home/ourServices/dis_grafico.png"

const HomeOurServices = () => {

    const items = [
        {
            title: "GRÁFICA",
            img: graficaImg,
            desc: ["Impresiones de calidad en todo tipo de soportes para tu marca. Plasmamos los diseños deseados por nuestros clientes en piezas fisicas seleccionadas para cada situación, empleando tecnologia de última generación e insumos gráficos de primera calidad.",
                "En ColorcopyGroup diseñamos soluciones a la medida del cliente hasta lograr su satisfacción. trabajamos con una amplia gama de materiales para ofrecer soluciones versátiles, garantizando resultados excepcionales. Producimos materiales para promoción de productos con el fin de que estos generen resultados óptimos. Impresión offset, impresion digital, impresion en grandes y pequeños formatos, impresion textil, sublimación, bordados computarizados, etc. Todo esto desarrollado y producido por equipos de alta gama."]
        },
        {
            title: "DISEÑO WEB",
            img: dis_webImg,
            desc: ["El posicionamiento SEO, o Search Engine Optimization en inglés, se refiere a un conjunto de prácticas y técnicas que se aplican a una página para que aparezca en mejores posiciones en los resultados de búsqueda de Google u otros motores de búsqueda. Estos mismos usan algoritmos para determinar qué páginas son las más relevantes para una búsqueda específica.",
                "El SEO trabaja en optimizar tu página web para que cumpla con los criterios de estos algoritmos y, por lo tanto, mejore su posición en los resultados de búsqueda. En resumen, el Search Engine Optimization es optimizar tu página web para que más personas la encuentren cuando buscan información relacionada. "
            ]
        },
        {
            title: "DISEÑO GRÁFICO",
            img: dis_graficoImg,
            desc: ["El diseño gráfico es una disciplina creativa que utiliza imágenes, tipografía y elementos visuales para comunicar mensajes o ideas de manera visual. Su objetivo principal es transmitir información de manera efectiva y atractiva. Este servicio se utiliza en una amplia variedad de medios, como carteles, folletos, sitios web, logotipos, redes sociales, entre otros.",
                "En resumen, el diseño gráfico sirve para crear piezas visuales que captan la atención, comunican un mensaje y mejoran la estética de diversos productos y plataformas, contribuyen a una comunicación más efectiva y atractiva."
            ]
        }
    ]


    return (
        <section className="homeOurServicesContainer">
            <div className="homeOurServices-topInfoContainer">
                <h2>IMPULSA TU MARCA CON NUESTRAS SOLUCIONES</h2>
                <p>Ofrecemos impresión de alta calidad utilizando materiales de primera clase. Realizamos impresiones offset, digitales, textiles, sublimación y bordados computarizados. Nos especializamos en soluciones personalizadas para satisfacer las necesidades específicas de cada cliente, asegurando resultados excepcionales y una mayor visibilidad para tu marca.</p>
            </div>
            <ItemsGallery items={items}/>
            <div className="homeOurServices-transition"></div>
        </section>
    )
}

export default HomeOurServices