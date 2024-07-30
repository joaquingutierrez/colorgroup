import "./style.css"
import Button from "../Button"
import useWindowSize from "../../customHooks/useWindowSize"
import { useLanguage } from "../../context/languageContext"

const Form = () => {

    const { language } = useLanguage()

    const { width } = useWindowSize()

    const translations = {
        spanish: {
            label1: "Nombre",
            label2: "Apellido",
            label3: "Correo electrónico",
            label4: "Mensaje",
            buttonTitle: "Enviar"
        },
        english: {
            label1: "First Name",
            label2: "Last Name",
            label3: "Email",
            label4: "Message",
            buttonTitle: "Send"
        },
        italian: {
            label1: "Nome",
            label2: "Cognome",
            label3: "E-mail",
            label4: "Messaggio",
            buttonTitle: "Inviare"
        }
    }

    return (
        <form className="formContainer">
            <div className="form-firtsLastName">
                <div className="form-labelInputContainer">
                    <label htmlFor="first_name">{translations[language].label1}</label>
                    <input type="text" name="first_name" id="first_name" />
                </div>
                <div className="form-labelInputContainer">
                    <label htmlFor="last_name">{translations[language].label2}</label>
                    <input type="text" name="last_name" id="last_name" />
                </div>
            </div>
            <div className="form-labelInputContainer">
                <label htmlFor="email">{translations[language].label3}</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-labelInputContainer">
                <label htmlFor="message">{translations[language].label4}</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <div className="form-buttonContainer">
                {width < 1025 ?
                    <button className="enchanceContainer-customButton">Enviar</button>
                    :
                    <Button title={translations[language].buttonTitle} isSubmit={true} />
                }
            </div>
        </form>
    )
}

export default Form