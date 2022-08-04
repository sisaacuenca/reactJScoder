import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <div className="d-flex justify-content-center border-top">
            2022 Santiago Isaac Cuenca - <a href="https://www.linkedin.com/in/sisaacuenca/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a> - Todos los Derechos reservados
        </div>
    )
}
export default Footer