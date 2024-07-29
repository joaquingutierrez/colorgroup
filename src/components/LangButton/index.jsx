import { useState } from "react"
import "./style.css"

const DropDown = ({ handleChange }) => {
    const [language, setLanguage] = useState("Español")
    const [showDropDown, setShowDropDown] = useState(false)

    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };

    const handleClick = (lan) => {
        switch (lan) {
            case "ESP":
                setLanguage("Español")
                handleChange("spanish")
                break
            case "ENG":
                setLanguage("English")
                handleChange("english")
                break
            case "ITA":
                setLanguage("Italiano")
                handleChange("italian")
                break
            default:
                setLanguage("Español")
                handleChange("spanish")
        }
        setShowDropDown(false)
    }

    return (
        <div className="dropDown">
            <button onClick={toggleDropdown} className="dropDown-button">
                {language}
            </button>
            {(
                <div className={`dropDown-hiddenContent ${showDropDown ? "dropDown-showContent" : ""}`}>
                    <ul>
                        <li onClick={() => handleClick("ESP")}>Español</li>
                        <li onClick={() => handleClick("ENG")}>English</li>
                        <li onClick={() => handleClick("ITA")}>Italiano</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropDown