import './item.css'
import ItemCount from '../contador/ItemCount'
import img from '../../img/monitorlg.jpg'

const Item = () => {
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

export default Item;