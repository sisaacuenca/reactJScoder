import React from "react"
import Item from "../Item/Item"
function ItemList(prod) {
    return (
        <div>
            <Item key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} stock={prod.stock} />
        </div>
    )
} export default ItemList