
import ItemList from "../itemList/ItemList"
import Spinner from 'react-bootstrap/Spinner';
import {getItem} from "../data/Data"
import CardGroup from 'react-bootstrap/CardGroup';

import { useEffect, useState } from 'react'

function ItemListContainer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        getItem()
            .then((resp) => setData(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })


    return (
        <CardGroup>
            {
                loading ?


                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : data.map(prod => <ItemList key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imagen={prod.img} stock={prod.stock} />)
            }

        </CardGroup>
    )

} export default ItemListContainer