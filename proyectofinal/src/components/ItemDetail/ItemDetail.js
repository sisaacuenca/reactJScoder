import Item from "../Item/Item"

const ItemDetail = ({prod})=>{
    return(
        <div>
            {prod.map(p=><Item key={p.id} {...p}/>)}
        </div>
    )
}
export default ItemDetail