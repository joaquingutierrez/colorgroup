import { useEffect, useState } from "react"

import "./style.css"
import { HomeAboutUs, HomeFrontPage, HomeGallery, HomeOurClients, HomeOurServices, LoadingScreen } from "../../componentsContainer"
import useMediaLoader from "../../customHooks/useMediaLoader"

import home_frontPageVideo from "../../assets/home/home_frontPageVideo.mp4"
import image1 from "../../assets/home/gallery/image1.png"
import image2 from "../../assets/home/gallery/image2.png"
import image3 from "../../assets/home/gallery/image3.png"
import image4 from "../../assets/home/gallery/image4.png"
import image5 from "../../assets/home/gallery/image5.png"
import image6 from "../../assets/home/gallery/image6.png"
import image7 from "../../assets/home/gallery/image7.png"
import useWindowSize from "../../customHooks/useWindowSize"

const Home = () => {
    const mediaUrls = [
        { url: image1, type: 'image' },
        { url: image2, type: 'image' },
        { url: image3, type: 'image' },
        { url: image4, type: 'image' },
        { url: image5, type: 'image' },
        { url: image6, type: 'image' },
        { url: image7, type: 'image' },
    ]

    const [isFinishLoading, setIsFinishLoading] = useState(false) /* Cambiar a false cuando termine la pagina*/
    const { loading, media } = useMediaLoader(mediaUrls)
    const [isLoading, setIsLoading] = useState(true)

    const { width } = useWindowSize()

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(loading)
    }, [loading]);

    useEffect(() => {
        if (!loading) {
            setIsLoading(false)
            setTimeout(() => {
                setIsFinishLoading(true)
            }, [4000])
        }
    }, [loading])

    const imageUrls = media.filter(item => item.type === 'image').map(item => item.url);


    return (
        <main>
            {width < 1026 ? <>
                <HomeFrontPage video={home_frontPageVideo} />
                    <HomeOurServices />
                    <HomeAboutUs />
                    <HomeOurClients />
                    <HomeGallery imgs={imageUrls} />
            </> : <>
            {!isFinishLoading ? (
                <LoadingScreen loading={isLoading} />
            ) : (
                <>
                    <HomeFrontPage video={home_frontPageVideo} />
                    <HomeOurServices />
                    <HomeAboutUs />
                    <HomeOurClients />
                    <HomeGallery imgs={imageUrls} />
                </>
            )}
            </>}
        </main>
    )
}

export default Home