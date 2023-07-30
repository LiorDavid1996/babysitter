import { useShoppingCard } from "../../context/StoreContext";
import { Button, Stack } from "react-bootstrap";
import storeItem from "../features/item.json"
import { formatCurrency } from "./formatCurrency";




export function CardItem ({id,quantity}){
    const {removeFromCart} = useShoppingCard()
    const item = storeItem.find(i => i.id === id)
    if(item == null) return null
    return(
        <Stack direction="horizontal" gap={2} classNam="d-flex align-items-center">
            <img src={item.imgUrl} 
            style={{width:"125px",height:"75px"}}/>
            <div className="me-auto">
                <div>
                    {item.name}{" "}/
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize: ".65rem"}}>
                            x{quantity}
                        </span>
                    )}
                </div>
               <div className="tent-muted" style={{fontSize:".75rem"}}>
                 {formatCurrency(item.price)}
               </div>
            </div>
            <div >
               {formatCurrency(item.price * quantity) }
               <Button variant="outline-danger" size="sm" onClick={ () =>
             removeFromCart(item.id)}>&times; </Button>
            </div>

        </Stack>
    )
}