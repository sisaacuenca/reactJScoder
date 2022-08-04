import getFetch from "../data/Data"
import ItemList from "../itemList/ItemList"
import { useEffect, useState } from 'react'

function ItemListContainer() {
    const [data, setData] = useState([])
    const { loading, setLoading } = useState(true)

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })


    return (
        <div>
            {
                loading ? <h4>---Cargando---</h4> :
                    data.map(prod => <ItemList key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imagen={prod.img} stock={prod.stock} />)
            }

        </div>
    )

} export default ItemListContainer