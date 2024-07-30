import { useEffect } from "react";

import { ContactFrontPage, ContactInfo } from "../../componentsContainer"
import "./style.css"

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <ContactFrontPage />
            <ContactInfo />
        </main>
    )
}

export default Contact