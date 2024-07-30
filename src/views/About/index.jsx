import { useEffect } from "react";

import { AboutDescription, AboutFrontPage, OurTeam, Testimony, Ubication } from "../../componentsContainer"
import "./style.css"

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <AboutFrontPage />
            <AboutDescription />
            <OurTeam />
            <Testimony />
            <Ubication />
        </main>
    )
}

export default About