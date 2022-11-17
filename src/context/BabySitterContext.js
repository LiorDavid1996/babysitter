import { useState, useEffect, createContext } from "react";
import getBabySitter from "../service/BabySitterServer";

export const BabysitterContext = createContext();

export default function BabySitterProvider({ children }) {
  const [babySitterArray, setBabySitterArray] = useState([]);
  const [isFavorite, setFavorite] = useState([]);
  const [FavoriteItem, setFavoriteItem] = useState([]);

  useEffect(() => {
    getBabySitter().then((res) => setBabySitterArray(res));
  }, []);

  function isInFavorites({ text }) {
    if (isFavorite.length == 0) {
      setFavorite([{ text }]);
    }
    let isSelected = false;
    for (let i = 0; i < isFavorite.length; i++) {
      if (isFavorite[i].text.id == text.id) {
        isSelected = true;
        break;
      }
    }
    if (isSelected) return;
    return setFavorite([{ text }, ...isFavorite]);
  }
 function deleteFavorite(id){
  console.log(isFavorite);
 console.log(id);
 const favItem = isFavorite.find(item => item.text.id == id)
 console.log(favItem);

 const startIndex = isFavorite.indexOf(favItem); 
 console.log(startIndex);

  
 const li = isFavorite.splice(startIndex,1)
  console.log(isFavorite);
 
 return setFavorite(li)


 }
  return (
    <BabysitterContext.Provider
      value={{
        babySitterArray,
        setBabySitterArray,
        isFavorite,
        setFavorite,
        isInFavorites,
        deleteFavorite
      }}
    >
      {children}
    </BabysitterContext.Provider>
  );
}
