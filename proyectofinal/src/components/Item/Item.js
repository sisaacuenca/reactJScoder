import './item.css'
import ItemCount from '../contador/ItemCount'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'



function Item(prod) {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.imagen} />
                <Card.Body>
                    <Card.Title>{prod.nombre}</Card.Title>
                    <Card.Text>
                        {prod.precio}
                    </Card.Text>
                    <ItemCount />
                    <Button variant="dark">Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;
