import { Button, Card } from "react-bootstrap";
import { useShoppingCard } from "../../context/StoreContext";
import { formatCurrency } from "./formatCurrency";



export function StoreItem ({id,name,price, imgUrl}){
    const {getItemQuantity ,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCard()
  
    const quantity = getItemQuantity(id)

return <Card className="h-100">
    <Card.Img
    variant="top"
     src={imgUrl} 
     height="200px" style={{ObjectFit: "cover"}} />

<Card.Body className="d-flex flex-colum" />
<Card.Title className="d-flex justify-content-between
 align-items-baseline mb-4"/>
 <span className="fs-2">{name}</span>
 <span className="ms-2 text-muted">{formatCurrency(price) }</span>
<div className="mt-auto">
{quantity === 0 ? (
 <Button className="w-100" onClick={ () => increaseCartQuantity(id)} >+ Add to Card</Button>
) : <div className="d-flex align-items-center flex-colum" style={{gap:".5rem"}}>
    <div className="d-flex align-item-center justify-content-center "
     style={{gap:".5rem"}}>
        <Button onClick={ () => decreaseCartQuantity(id)} >-</Button>
        <div>
            <span className="fs-3">{quantity}</span>
            in the card
        </div>
        <Button onClick={ () => increaseCartQuantity(id)}  >+</Button>
     </div>
     <Button onClick={ () => removeFromCart(id) }  variant="danger" size="sm" >Remove</Button>
</div> }
</div>
</Card>
}