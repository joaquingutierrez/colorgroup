import { useEffect } from "react"

import "./style.css"
import { Enhance, ServiceInfo, ServicesFrontPage, StripeSection, WhyColorGroup } from "../../componentsContainer"
import useScroll from "../../customHooks/useScroll"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"

const Services = () => {

    const { language } = useLanguage()

    const { width } = useWindowSize()

    const { isAtTop: isAtTopMaker1, elementRef: marker1Ref } = useScroll()
    const { isAtTop: isAtTopMaker2, elementRef: marker2Ref } = useScroll()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const translations = {
        spanish: {
            title: "Somos un grupo empresarial que ofrece soluciones integrales en comunicación visual, marketing y análisis financiero."
        },
        english: {
            title: "We are a business group that offers comprehensive solutions in visual communication, marketing and financial analysis."

        },
        italian: {
            title: "Siamo un gruppo aziendale che offre soluzioni complete di comunicazione visiva, marketing e analisi finanziaria."

        }
    }

    const translationsMarketing = {
        spanish: {
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
        },
        english: {
            title: "DIGITAL MARKETING",
            items: [{
                title: "Web Design",
                desc: "We have qualified professionals in all areas to create a website that increases the reach of your company on all digital platforms.",
                list: ["Graphic Pieces", "Web Content", "SEO Positioning", "Online Advertising", "Market Analysis"]
            },
            {
                title: "Social media",
                desc: "We set up your company's social networks from scratch, studying the ideal target audience to achieve maximum interaction with your publications.",
                list: ["Social Media Management", "Advertising on Social Media", "Results Reports", "Metrics Study", "Graphic Design"]
            },
            {
                title: "Platform integration",
                desc: "We configure each of the elements of your digital marketing strategy so that you don't have to worry about anything.",
                list: ["Network Integration", "Sales Management", "Email Marketing", "Data Analysis", "All-in-One Management"]
            }

            ]
        },
        italian: {
            title: "Marketing digitale",
            items: [{
                title: "Web Design",
                desc: "Disponiamo di professionisti qualificati in tutti i settori per creare un sito web che aumenti la portata della tua azienda su tutte le piattaforme digitali.",
                list: ["Pezzi grafici", "Contenuto del web", "Posizionamento SEO", "Pubblicità online", "Analisi di mercato"]
            },
            {
                title: "Social Network",
                desc: "Configuriamo da zero i social network della tua azienda, studiamo il target di riferimento ideale per ottenere la massima interazione con le tue pubblicazioni.",
                list: ["Gestione della rete", "Pubblicità in rete", "Rapporti sui risultati", "Studio delle metriche", "Graphic design"]
            },
            {
                title: "Integrazione della piattaforma",
                desc: "Configuriamo ciascuno degli elementi della tua strategia di marketing digitale in modo che tu non debba preoccuparti di nulla.",
                list: ["Integrazione di rete", "Direzione vendite", "Marketing via email", "Analisi dei dati", "Gestione tutto in uno"]
            }
            ]
        }
    }

    const translationsPublicity = {
        spanish: {
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
        },
        english: {
            title: "GRAPHIC ADVERTISING",
            items: [{
                title: "Posters and stationery",
                desc: "We carry out the graphic design and printing of all the graphic elements of your brand. We use the best quality vinyl and paper for all types of printing and we carry out rigorous quality control to ensure that the colours and finish catch everyone's eye.",
                list: ["Graphic design", "Printed vinyl", "Printed canvas", "Large format posters", "Corporeal"]
            },
            {
                title: "Personalized items",
                desc: "We do vinyl printing, sublimation and embroidery for uniforms and personalized items of all kinds. We reinforce your brand image with uniforms, business gifts and corporate items with your brand.",
                list: ["Sublimated products", "Uniforms with your brand", "Corporate gifts", "Plots", "Keychains and pins"]
            },
            {
                title: "Advertising vinyl",
                desc: "We create designs using the best quality, highly resistant vinyl according to the project requirements. We install the vinyl on site or send it to your home ready to be placed.",
                list: ["Printed vinyl", "Calendered vinyl", "Die-cut vinyl", "Stickers", "Sale and placement"]
            }
            ]
        },
        italian: {
            title: "Pubblicità Grafico",
            items: [{
                title: "Segnaletica e cancelleria",
                desc: "Realizziamo la Progettazione Grafica e la stampa di tutti gli elementi grafici del tuo brand. Utilizziamo vinile e carta della migliore qualità per tutti i tipi di stampe ed effettuiamo rigorosi controlli di qualità per garantire che i colori e la finitura siano accattivanti.",
                list: ["Graphic design", "Vinile stampato", "Teli stampati", "Segnaletica di grande formato", "Corporeo"]
            },
            {
                title: "Articoli personalizzati",
                desc: "Effettuiamo stampa vinilica, sublimatica e ricami per uniformi e articoli personalizzati di ogni tipo. Rafforziamo l'immagine del tuo marchio con uniformi, regali aziendali ed elementi aziendali con il tuo marchio.",
                list: ["prodotti sublimati", "Divise con il tuo marchio", "Regali corporativi", "Trame", "Portachiavi e spille"]
            },
            {
                title: "Vinili pubblicitari",
                desc: "Realizziamo disegni in vinile della migliore qualità, altamente resistenti a seconda di ciò che il progetto richiede. Installiamo il vinile in loco o lo inviamo a casa tua pronto per l'installazione.",
                list: ["Vinili stampati", "Vinili calandrati", "Vinili fustellati", "Adesivi", "Vendita e collocamento"]
            }
            ]
        }
    }

    return (
        <main>
            <ServicesFrontPage />
            {width < 1025 ? <>
                <h2 className="servicesPage-section-title">{translations[language].title}</h2>
                <ServiceInfo title={translationsMarketing[language].title} items={translationsMarketing[language].items} />
                <ServiceInfo title={translationsPublicity[language].title} items={translationsPublicity[language].items} />
                <WhyColorGroup />
            </> : <>
                <StripeSection />
                <div className="services-infoAndWhyContainer">
                    <div className={`services-infoAndWhyWrapper services-infoAndWhyWrapper-z1 ${isAtTopMaker1 ? "services-info-translate" : ""}`}>
                        <ServiceInfo title={translationsMarketing[language].title} items={translationsMarketing[language].items} />
                    </div>
                    <div ref={marker1Ref} className={`services-infoAndWhyWrapper services-infoAndWhyWrapper-z2 ${isAtTopMaker2 ? "services-info-translate" : ""}`}>
                        <ServiceInfo title={translationsPublicity[language].title} items={translationsPublicity[language].items} />
                    </div>
                    <div ref={marker2Ref} className="services-infoAndWhyWrapper2">
                        <WhyColorGroup />
                    </div>
                </div>
            </>}
            <Enhance />
        </main>
    )
}

export default Services