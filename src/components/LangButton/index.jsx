import { useState } from "react"
import "./style.css"

const DropDown = ({ handleChange, title }) => {

    const [showDropDown, setShowDropDown] = useState(false)

    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };

    const handleClick = (lan) => {
        switch (lan) {
            case "ESP":
                handleChange("spanish")
                break
            case "ENG":
                handleChange("english")
                break
            case "ITA":
                handleChange("italian")
                break
            default:
                handleChange("spanish")
        }
        setShowDropDown(false)
    }

    return (
        <div className="dropDown">
            <button onClick={toggleDropdown} className="dropDown-button">
                {title.charAt(0).toUpperCase() + title.slice(1)}
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