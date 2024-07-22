import "./style.css"
import image1 from "../../assets/home/gallery/image1.png"
import image2 from "../../assets/home/gallery/image2.png"
import image3 from "../../assets/home/gallery/image3.png"
import image4 from "../../assets/home/gallery/image4.png"
import image5 from "../../assets/home/gallery/image5.png"
import image6 from "../../assets/home/gallery/image6.png"
import image7 from "../../assets/home/gallery/image7.png"


const HomeGallery = () => {

    const imgs = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
    ]

    const galleryColumns = 3

    const renderGallery = () => {
        return imgs.map((img, index) => {
            let positionClass = '';

            if (index === imgs.length - 1 && imgs.length % 3 !== 0) {
                positionClass = 'homeGallery-imgContainer-centerPosition';
            } else if (index % 3 === 0) {
                positionClass = 'homeGallery-imgContainer-leftPosition';
            } else if (index % 3 === 1) {
                if (index === 4 ) {
                    positionClass = 'homeGallery-imgContainer-centerPosition homeGallery-imgContainer-bannerBG'
                } else {
                    positionClass = 'homeGallery-imgContainer-centerPosition';
                }
            } else {
                positionClass = 'homeGallery-imgContainer-rightPosition';
            }

            return (
                <div key={index} className={`homeGallery-imgContainer ${positionClass}`}>
                    <img src={img} alt="Imagen de la galería" />
                </div>
            );
        });
    };


    return (
        <section className="homeGallerySectionContainer">
            <div className="homeGalleryBanner">

            </div>
            <div className="homeGalleryContainer">
                <div className="homeGalleryWrapper">
                    {renderGallery()}
                </div>
            </div>
        </section>
    )
}

export default HomeGallery