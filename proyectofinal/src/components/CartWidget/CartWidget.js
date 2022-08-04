import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const CartWidget = () => {
    return (
        <Button variant="outline-secondary"><FontAwesomeIcon icon={faCartShopping} /><Badge bg="secondary">0</Badge></Button>
    )
}
export default CartWidget