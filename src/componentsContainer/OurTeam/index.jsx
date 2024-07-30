import "./style.css"
import iazzettaImg from "../../assets/about/team/iazzetta.png"
import horacio_contrerasImg from "../../assets/about/team/horacio_contreras.png"
import lucas_contrerasImg from "../../assets/about/team/lucas_contreras.png"
import CardsCarousel from "../../components/CardsCarousel"
import { useLanguage } from "../../context/languageContext"

const OurTeam = () => {

    const { language } = useLanguage()

    const translations = {
        spanish: {
            title: "Nuestro equipo",
            team: [
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Iazzetta",
                    rol: "CEO",
                    desc: "Control general de la empresa",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Engargado del departamento de finanzas",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Encargado de la implementación operaciones",
                    linkedin: ""
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Iazzetta",
                    rol: "CEO",
                    desc: "Control general de la empresa",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Engargado del departamento de finanzas",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Encargado de la implementación operaciones",
                    linkedin: ""
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Iazzetta",
                    rol: "CEO",
                    desc: "Control general de la empresa",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Engargado del departamento de finanzas",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Encargado de la implementación operaciones",
                    linkedin: ""
                }
            ]
        },
        english: {
            title: "Our team",
            team: [
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "General control of the company",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Head of the finance department",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "In charge of operations implementation",
                    linkedin: ""
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "General control of the company",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Head of the finance department",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "In charge of operations implementation",
                    linkedin: ""
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "General control of the company",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Head of the finance department",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "In charge of operations implementation",
                    linkedin: ""
                }
            ]
        },
        italian: {
            title: "La nostra squadra",
            team: [
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "Controllo generale dell'azienda",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Responsabile del dipartimento finanziario",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Responsabile dell'implementazione delle operazioni",
                    linkedin: ""
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "Controllo generale dell'azienda",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Responsabile del dipartimento finanziario",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Responsabile dell'implementazione delle operazioni",
                    linkedin: ""
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "Controllo generale dell'azienda",
                    linkedin: ""
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Responsabile del dipartimento finanziario",
                    linkedin: ""
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Responsabile dell'implementazione delle operazioni",
                    linkedin: ""
                }
            ]
        }
    }

    return (
        <section className="ourTeamContainer">
            <h2>{translations[language].title}</h2>
            <CardsCarousel items={translations[language].team} />
        </section>
    )
}

export default OurTeam