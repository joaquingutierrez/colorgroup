import "./style.css"
import { Enhance, ServiceInfo, ServicesFrontPage, StripeSection, WhyColorGroup } from "../../componentsContainer"
import useScroll from "../../customHooks/useScroll"

const Services = () => {

    const { isAtTop: isAtTopMaker1, elementRef: marker1Ref } = useScroll()
    const { isAtTop: isAtTopMaker2, elementRef: marker2Ref } = useScroll()

    const marketing = {
        title: "Marketing Digital",
        items: [{
            title: "Diseño Web",
            desc: "Contamos con profesionales calificados en todas las áreas para crear un sitio web que incremente el alcance de tu empresa en todas las plataformas digitales.",
            list: ["Piezas Gráficas", "Contenidos Web", "Posicionamiento SEO", "Publicidad Online", "Analisis de Mercado"]
        },
        {
            title: "Redes Sociales",
            desc: "Configuramos las redes sociales de tu empresa desde cero, estudiamos el público objetivo ideal para conseguir la máxima interacción con tus publicaciones.",
            list: ["Gestión de Redes", "Publicidad en Redes", "Informes de Resultados", "Estudio de Métricas", "Diseño Gráfico"]
        },
        {
            title: "Integración de Plataformas",
            desc: "Realizamos la configuración de cada uno de los elementos de tu estrategia de marketing digital para que no tengas que preocuparte por nada.",
            list: ["Integración de Redes", "Gestión de Ventas", "Email Marketing", "Análisis de datos", "Gestión Todo En Uno"]
        }

        ]
    }

    const publicity = {
        title: "Publicidad Gráfica",
        items: [{
            title: "Cartelería y papelería",
            desc: "Realizamos el Diseño Gráfico y la impresión de todos los elementos gráficos de tu marca. Empleamos la mejor calidad en vinilo y papel para todo tipo de impresiones y realizamos un riguroso control de calidad para garantizar que los colores y el acabado capten todas las miradas.",
            list: ["Diseño Gráfico", "Vinilo impreso", "Lonas impresas", "Cartelería de gran formato", "Corpóreos"]
        },
        {
            title: "Artículos personalizados",
            desc: "Hacemos estampados en vinilo, sublimación y bordados para uniformes y artículos personalizados de todo tipo. Reforzamos tu imagen de marca con uniformes, regalos empresariales y elementos corporativos con tu marca.",
            list: ["Productos sublimados", "Uniformes con tu marca", "Regalos corporativos", "Plotteos", "Llaveros y pines"]
        },
        {
            title: "Vinilos publicitarios",
            desc: "Realizamos diseños en vinilos de la mejor calidad, de alta resistencia de acuerdo a lo que requiera el proyecto. Realizamos la instalación del vinilo en el lugar o te lo enviamos a tu domicilio listo para colocar.",
            list: ["Vinilos impresos", "Vinilos calandrados", "Vinilos troquelados", "Stickers", "Venta y colocación"]
        }
        ]
    }

    return (
        <main>
            <ServicesFrontPage />
            <StripeSection />
            <div className="services-infoAndWhyContainer">
                <div className={`services-infoAndWhyWrapper services-infoAndWhyWrapper-z1 ${isAtTopMaker1 ? "services-info-translate" : ""}`}>
                    <ServiceInfo title={marketing.title} items={marketing.items} />
                </div>
                <div ref={marker1Ref} className={`services-infoAndWhyWrapper services-infoAndWhyWrapper-z2 ${isAtTopMaker2 ? "services-info-translate" : ""}`}>
                    <ServiceInfo title={publicity.title} items={publicity.items} />
                </div>
                <div ref={marker2Ref} className="services-infoAndWhyWrapper2">
                    <WhyColorGroup />
                </div>
            </div>
            <Enhance />
        </main>
    )
}

export default Services