import { useEffect, useRef, useState } from "react"

const useMediaLoader = (mediaUrls) => {

    const [loading, setLoading] = useState(true)
    const [media, setMedia] = useState([])
    const loadedRef = useRef(0)


    useEffect(() => {
        const total = mediaUrls.length;

        const onLoad = () => {
            loadedRef.current += 1;
            console.log(loadedRef.current)
            if (loadedRef.current === total) {
                setLoading(false);
            }
        };

        const loadMedia = () => {
            const loadedMedia = [];
            mediaUrls.forEach(({ url, type }) => {
                let element;

                if (type === 'image') {
                    element = new Image();
                    element.onload = onLoad;
                } else if (type === 'video') {
                    element = document.createElement('video');
                    element.onloadeddata = onLoad;
                }

                element.src = url;
                loadedMedia.push({ url, type });
            });
            setMedia(loadedMedia);
        };

        loadMedia();

        return () => {
            setLoading(true);
        };
    }, [])

    return { loading, media }
}

export default useMediaLoader 