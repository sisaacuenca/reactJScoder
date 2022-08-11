import React from "react"
import Item from "../Item/Item"
function ItemList( id, nombre, precio, img, stock) {
    return (
        <div>
            <Item key={id}  nombre={nombre} precio={precio} imagen={img} stock={stock} />
        </div>
    )
} export default ItemList