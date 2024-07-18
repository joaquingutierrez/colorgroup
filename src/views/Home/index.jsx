import { useEffect, useState } from "react"

import "./style.css"
import { HomeFrontPage, LoadingScreen } from "../../componentsContainer"

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [isFinishLoading, setIsFinishLoading] = useState(false) /* Cambiar a false cuando termine la pagina*/

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
            setTimeout(()=>{
                setIsFinishLoading(true)
            },[4000])
        },[5000])
    },[])

    const handleLoading = () => {
    }

    return (
        <main>
            {!isFinishLoading ? (
                <LoadingScreen loading={isLoading} />
            ) : (
                <HomeFrontPage />
            )}
        </main>
    )
}

export default Home