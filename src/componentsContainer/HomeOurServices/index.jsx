import "./style.css"
import { ItemsGallery, SwippeableGallery } from "../../components"
import graficaImg from "../../assets/home/ourServices/grafica.png"
import dis_webImg from "../../assets/home/ourServices/dis_web.png"
import dis_graficoImg from "../../assets/home/ourServices/dis_grafico.png"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"

const HomeOurServices = () => {

    const { language } = useLanguage()

    const { width, height } = useWindowSize();

    const translations = {
        spanish: {
            title: "IMPULSA TU MARCA CON NUESTRAS SOLUCIONES",
            desc: "Ofrecemos impresión de alta calidad utilizando materiales de primera clase. Realizamos impresiones offset, digitales, textiles, sublimación y bordados computarizados. Nos especializamos en soluciones personalizadas para satisfacer las necesidades específicas de cada cliente, asegurando resultados excepcionales y una mayor visibilidad para tu marca.",
            items: [
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
        },
        english: {
            title: "BOOST YOUR BRAND WITH OUR SOLUTIONS",
            desc: "We offer high-quality printing using first-class materials. We perform offset, digital, textile, sublimation and computerized embroidery printing. We specialize in customized solutions to meet the specific needs of each client, ensuring exceptional results and greater visibility for your brand.",
            items: [
                {
                    title: "GRAPH",
                    img: graficaImg,
                    desc: ["Quality printing on all types of media for your brand. We capture the designs desired by our clients in physical pieces selected for each situation, using cutting-edge technology and top-quality graphic supplies. At ColorcopyGroup we design solutions tailored to the client's needs until we achieve their satisfaction.", "We work with a wide range of materials to offer versatile solutions, guaranteeing exceptional results. We produce materials for product promotion so that they generate optimal results.", "Offset printing, digital printing, printing in large and small formats, textile printing, sublimation, computerized embroidery, etc. All of this developed and produced by high-end equipment."]
                },
                {
                    title: "WEB DESIGN",
                    img: dis_webImg,
                    desc: ["SEO, or Search Engine Optimization, refers to a set of practices and techniques that are applied to a page so that it appears in better positions in the search results of Google or other search engines. These same search engines use algorithms to determine which pages are the most relevant for a specific search.", "SEO works on optimizing your web page so that it meets the criteria of these algorithms and, therefore, improves its position in the search results. In short, Search Engine Optimization is optimizing your web page so that more people find it when they search for related information."]
                },
                {
                    title: "GRAPHIC DESIGN",
                    img: dis_graficoImg,
                    desc: ["Graphic design is a creative discipline that uses images, typography, and visual elements to communicate messages or ideas visually. Its main objective is to transmit information in an effective and attractive way. This service is used in a wide variety of media, such as posters, brochures, websites, logos, social networks, among others.", "In short, graphic design serves to create visual pieces that capture attention, communicate a message and improve the aesthetics of various products and platforms, contributing to more effective and attractive communication."]
                }
            ]
        },
        italian: {
            title: "POTENZIA IL TUO MARCHIO CON LE NOSTRE SOLUZIONI",
            desc: "Offriamo stampe di alta qualità utilizzando materiali di prima qualità. Effettuiamo stampa offset, digitale, tessile, sublimatica e computerizzata da ricamo. Siamo specializzati in soluzioni personalizzate per soddisfare le esigenze specifiche di ogni cliente, garantendo risultati eccezionali e maggiore visibilità per il tuo marchio.",
            items: [
                {
                    title: "GRAFICO",
                    img: graficaImg,
                    desc: ["In ColorcopyGroup progettiamo soluzioni su misura per il cliente fino al raggiungimento della tua soddisfazione. Lavoriamo con un'ampia gamma di materiali per offrire soluzioni versatili, garantendo risultati eccezionali. Produciamo materiali per la promozione dei prodotti in modo che generino risultati ottimali. Stampa offset, stampa digitale, stampa in grandi e piccoli formati, stampa tessile, sublimazione, ricamo informatizzato, ecc. Tutto questo sviluppato e prodotto da apparecchiature di fascia alta."]
                },
                {
                    title: "WEB DESIGN",
                    img: dis_webImg,
                    desc: ["Il posizionamento SEO, o Search Engine Optimization in inglese, si riferisce a un insieme di pratiche e tecniche che vengono applicate a una pagina affinché appaia in posizioni migliori nei risultati di ricerca di Google o di altri motori di ricerca. Usano algoritmi per determinare quali pagine sono più pertinenti per una ricerca specifica.", "La SEO lavora sull'ottimizzazione del tuo sito web in modo che soddisfi i criteri di questi algoritmi e, quindi, migliori la sua posizione nei risultati di ricerca. In breve, il motore di ricerca L'ottimizzazione significa ottimizzare il tuo sito web in modo che più persone lo trovino quando effettuano una ricerca informazioni correlate."]
                },
                {
                    title: "GRAPHIC DESIGN",
                    img: dis_graficoImg,
                    desc: ["Il graphic design è una disciplina creativa che utilizza immagini, tipografia ed elementi visivi per comunicare visivamente messaggi o idee. Il suo obiettivo principale è trasmettere informazioni in modo efficace e attraente. Questo servizio viene utilizzato in un'ampia varietà di media, come poster, brochure, siti Web, loghi, social network, tra gli altri.", "In sintesi, il design grafico serve a creare pezzi visivi che catturino l’attenzione, comunichino un messaggio e migliorino l’estetica di vari prodotti e piattaforme, contribuendo a una comunicazione più efficace e attraente."]
                }
            ]
        }
    }

    return (
        <section className="homeOurServicesContainer">
            <div className="homeOurServices-topInfoContainer">
                <h2>{translations[language].title}</h2>
                <p>{translations[language].desc}</p>
            </div>
            {width < 1025 || height < 840 ? <SwippeableGallery items={translations[language].items} /> : (
                <>
                    <ItemsGallery items={translations[language].items} />
                    <div className="homeOurServices-transition"></div>
                </>
            )}
        </section>
    )
}

export default HomeOurServices