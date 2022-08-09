import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from 'react'
import {getItemById} from '../data/Data';
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {

    const[data, setData]= useState()
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    
    useEffect(() => {
      getItemById(productId)
      .then((resp) => setData(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [productId])
   


    return (<div>{ loading ? <Spinner /> : <ItemDetail producto={data} /> }</div>)

} export default ItemDetailContainer;