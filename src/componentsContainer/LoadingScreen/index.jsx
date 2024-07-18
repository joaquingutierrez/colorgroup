import { useEffect, useState } from "react"
import "./style.css"

const LoadingScreen = ({loading}) => {

    const [startAnimation, setStartAnimation] = useState(false)

    useEffect(()=>{
        if (loading) {
            const timer = setTimeout(()=> {
                setStartAnimation(true)
            },500)
            return () => clearTimeout(timer);
        }
    },[])

    return (
        <section className="loadingScreenContainer">
            <div className={`loadingScreen-line ${startAnimation ? "loadingScreen-line-start" : ""} ${loading ? "" : "loadingScreen-line-finish"}`} ></div>
            <div className="loadingScreen-textContainer">
                <h2>LOADING</h2>
            </div>
        </section>
    )
}

export default LoadingScreen