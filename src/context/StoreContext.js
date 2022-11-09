import react , {createContext, useEffect ,useState , useContext} from 'react'
import { ShoppingCart } from '../components/features/ShoppingCart';

const ShoppingContext =createContext({});

export function useShoppingCard(){
   return useContext(ShoppingContext)
}
export function ShoppingCardProvider({children}){
   const[cardItem,setCardItem]=useState([])
   const[isOpen, setIsOpen] = useState(false)
   const cartQuantity = cardItem.reduce( (quantity , item) => item.quantity + quantity, 0)

   const openCart = () => setIsOpen(true)
   const closeCart = () => setIsOpen(false)

   function getItemQuantity (id){
      return cardItem.find(item => item.id === id)?. quantity || 0
   }
   function increaseCartQuantity(id){
      setCardItem(currItem => {
         if(currItem.find(item => item.id === id) == null){
            return [...currItem , { id, quantity:1}]
         }else{
            return currItem.map(item => {
               if(item.id === id){
                  return {...item, quantity: item.quantity + 1}
               }
               else{
                  return item
               }
            })
         }
      })
   }
   function decreaseCartQuantity( id ){
      setCardItem(currItem => {
         if(currItem.find(item => item.id === id)?. quantity === 1){
            return currItem.filter( item => item.id !== id)
         }else{
            return currItem.map(item => {
               if(item.id === id){
                  return {...item, quantity: item.quantity -1 }
               }
               else{
                  return item
               }
            })
         }
      })
   }
  function removeFromCart(id){
   setCardItem(currItem => {
      return currItem.filter(item => item.id !== id)
   })
  }
   return (
      <ShoppingContext.Provider value={{
         getItemQuantity ,
       increaseCartQuantity ,
       decreaseCartQuantity ,
        removeFromCart,
        cartQuantity,
        openCart,
        closeCart,
        cardItem

        }}
        >
         {children}
         <ShoppingCart isOpen={isOpen}/>
      </ShoppingContext.Provider>
   )
}
