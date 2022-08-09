import './item.css'

import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';





function Item(prod) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.imagen} />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>
                    ${prod.precio}
                </Card.Text>
                <ItemCount stock={prod.stock} />
                <Button variant="dark">Agregar al Carrito</Button>
                <Button variant="info" onClick={<ItemDetailContainer />}>Ver Detalle</Button>
                <div>stock: {prod.stock}</div>
            </Card.Body>
        </Card>

    );
}

export default Item;