import "./style.css"
import phone_logo from "../../assets/logos/phone_logo.png"
import mail_logo from "../../assets/logos/mail_logo.png"
import ubication_logo from "../../assets/logos/ubication_logo.png"
import whatsapp_logo from "../../assets/logos/whatsapp_logo.png"
import { Form } from "../../components"

const ContactInfo = () => {

    return (
        <section className="contactInfoContainer">
            <div className="contactInfo">
                <div className="contactInfo-data">
                    <ul>
                        <li><img src={phone_logo} alt="Phone Logo" /><p className="contact-infoContent">+54 9 3547459665</p></li>
                        <li><img src={mail_logo} alt="Email Logo" /><p className="contact-infoContent">contacto@colorcopygroup.com<br />colorcopyag@gmail.com</p></li>
                        <li><img src={ubication_logo} alt="Ubication Logo" /><p className="contact-infoContent">Raúl Alfonsín 157, Alta Gracia Córdoba</p></li>
                        <li><img src={whatsapp_logo} alt="whatsapp Logo" /><p className="contact-infoContent">Whatsapp Live Chat</p></li>
                    </ul>
                </div>
                <div className="contactInfo-days">
                    <div>
                        <h3 className="contact-infoContent">Lunes - Viernes</h3>
                        <p className="contact-infoContent">9:00 AM - 1:00 PM</p>
                        <p className="contact-infoContent">14:00 PM - 18:00 PM</p>
                    </div>
                    <div>
                        <h3 className="contact-infoContent">Sábado</h3>
                        <p className="contact-infoContent">9:00 AM - 1:00 PM</p>
                    </div>
                </div>
            </div>
            <Form />
        </section>
    )
}

export default ContactInfo