import { useEffect, useRef, useState } from "react"
import "./style.css"
import useIntersectionObserver from "../../customHooks/useIntersectionObserver"

const ItemsGallery = ({ items }) => {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [selectedImg, setSelectedImg] = useState(0)
    const itemsGalleryRef = useRef(null)
    const isVisible = useIntersectionObserver(itemsGalleryRef, { threshold: 0.4 })

    const handleSelectedItem = (index) => {
        setSelectedIndex(index)
        setSelectedImg(index)
        if (selectedIndex >= 0 && selectedIndex !== index) {
            handleDeselectedItem()
            setTimeout(() => {
                setSelectedIndex(index)
                setSelectedImg(index)
            }, [200])
        }
    }

    const handleDeselectedItem = () => {
        setSelectedIndex(-1)
    }

    useEffect(() => {
        const { top } = itemsGalleryRef.current.getBoundingClientRect();
        const scrollPosition = window.pageYOffset + top;

        if (isVisible) {
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [isVisible])

    return (
        <div ref={itemsGalleryRef} className="itemsGalleryContainer">
            <div className={`itemsGallery-imgContainer ${selectedIndex >= 0 ? "itemsGallery-imgContainerSelected" : ""}`}>
                <img src={items[selectedImg].img} alt="" />
            </div>
            <ul className="itemsGallery-titlesContainer">
                {items.map((item, index) =>
                    <li className={`${selectedIndex >= 0 ? (selectedIndex === index ? "itemsGallery-selectedTitle" : "itemsGallery-notSelectedTitle") : ""}`} key={index} onMouseEnter={() => handleSelectedItem(index)} onMouseLeave={handleDeselectedItem}>
                        {item.title}
                    </li>
                )}
            </ul>
            <div className={`itemsGallery-textAsideContainer ${selectedIndex >= 0 ? "itemsGallery-textAsideContainer-selected" : ""}`}>
                {selectedIndex >= 0 && (items[selectedIndex].desc.map((text, index) =>
                    <p key={index}>{text}</p>
                ))}
                {selectedIndex >= 0 && <h3> {items[selectedIndex].title.toLowerCase()}</h3>
                }
            </div>
        </div >
    )
}

export default ItemsGallery