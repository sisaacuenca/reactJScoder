import './item.css'
import ItemCount from '../contador/ItemCount'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Item(prod) {
    return (
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
    );
}

export default Item;
/*
const  = () => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Nombre Producto</h5>
                <p className="card-text">Precio del producto</p>
                <ItemCount />
                <button className='btn btn-dark'>Agregar al carrito</button>
            </div>
        </div >

    );
}

export default Item;*/