import "./style.css"

const Button = ({title, isSubmit}) => {

    return (
        <button className="customButton" type={isSubmit ? "submit" : ""}>
            <span>{title}</span>
{/*             <div className="customButton-alter">
                <p>{title}</p>
            </div> */}
        </button>
    )
}

export default Button