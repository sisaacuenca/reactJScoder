import { Modal } from "bootstrap"
import Item from "../Item/Item"

const ItemDetail = ({prod})=>{
    return(
        <Modal.dialog>
            {prod.map(p=><Item key={p.id} {...p}/>)}
        </Modal.dialog>
    )
}
export default ItemDetail