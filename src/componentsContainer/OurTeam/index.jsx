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
                    tel: "+39 379 220 7910",
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Encargado del departamento de finanzas",
                    tel: "",

                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Encargado de la implementación operaciones",
                    tel: "+39 379 114 6895",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
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
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Head of the finance department",
                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "In charge of operations implementation",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "General control of the company",
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Head of the finance department",
                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "In charge of operations implementation",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "General control of the company",
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Head of the finance department",
                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "In charge of operations implementation",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
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
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Responsabile del dipartimento finanziario",
                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Responsabile dell'implementazione delle operazioni",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "Controllo generale dell'azienda",
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Responsabile del dipartimento finanziario",
                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Responsabile dell'implementazione delle operazioni",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
                },
                {
                    img: iazzettaImg,
                    name: "Juan Manuel Lazzetta",
                    rol: "CEO",
                    desc: "Controllo generale dell'azienda",
                    linkedin: "https://www.linkedin.com/in/iazzettajm/"
                },
                {
                    img: horacio_contrerasImg,
                    name: "Horacio Perez Contreras",
                    rol: "CFO",
                    desc: "Responsabile del dipartimento finanziario",
                    linkedin: "https://www.linkedin.com/in/horacio-perez-contreras-546aa6303/"
                },
                {
                    img: lucas_contrerasImg,
                    name: "Lucas Perez Contreras",
                    rol: "COO",
                    desc: "Responsabile dell'implementazione delle operazioni",
                    linkedin: "https://www.linkedin.com/in/lucas-perez-contreras-438748302/"
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