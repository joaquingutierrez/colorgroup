import "./style.css"
import useWindowSize from "../../customHooks/useWindowSize"

const Ubication = () => {
    const { width } = useWindowSize()

    return (
        <section className="ubicationContainer">
            <div className="ubication-textContainer">
                <h2>Nuestra Ubicación</h2>
                <h3>¡Te invitamos a conocernos en persona y descubrir cómo podemos ayudarte a alcanzar tus metas digitales!</h3>
                {width < 1025 &&
                    <div className="ubication-mapContainer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1656163245348!2d-64.4277015!3d-31.656688400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d57358c719319%3A0xbe6cf79a346953a!2sDr.%20Ra%C3%BAl%20Alfons%C3%ADn%20151%2C%20Alta%20Gracia%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1720615281605!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                <div>
                    <h4>Raúl Alfonsín 157, Alta Gracia Córdoba <img src="" alt="" /></h4>
                    <div>
                        <h4>Lunes - Viernes</h4>
                        <p>9:00 AM - 1:00 PM</p>
                        <p>14:00 PM - 18:00 PM</p>
                        <h4>Sábado</h4>
                        <p>9:00 AM - 1:00 PM</p>
                    </div>
                </div>
            </div>
            {width >= 1025 &&
                <div className="ubication-mapContainer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1656163245348!2d-64.4277015!3d-31.656688400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d57358c719319%3A0xbe6cf79a346953a!2sDr.%20Ra%C3%BAl%20Alfons%C3%ADn%20151%2C%20Alta%20Gracia%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1720615281605!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            }

        </section>
    )
}

export default Ubication