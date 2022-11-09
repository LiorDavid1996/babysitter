import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCard } from "../../context/StoreContext";
import { CardItem } from "../features/Cartitem";
import storItem from '../features/item.json'

export function ShoppingCart({isOpen}){
    const {closeCart, cardItem} = useShoppingCard()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
             <Offcanvas.Title>cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack>
                    {cardItem.map(item =>(
                   <CardItem key={item.id} {...item}/>
                    ))}
                    {/* <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cardItem.reduce(total,cardItem ) => {
                   const item = storeItem.find(i  => i.id === cardItem.id)
                   return total + (item?.price || 0) * cartItem.quantity
                },0
                     )}
                    </div> */}
                </Stack>
            </Offcanvas.Body>

        </Offcanvas>
    )
}