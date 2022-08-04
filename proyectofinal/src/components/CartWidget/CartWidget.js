import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const CartWidget = () => {
    return (
        <Button variant="outline-primary"><FontAwesomeIcon icon={faCartShopping} /><Badge bg="primary">0</Badge></Button>
    )
}
export default CartWidget