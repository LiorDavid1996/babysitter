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

  function addFavorite(id) {
      const item = babySitterArray.find(element=> element.id === id)
  
       return setFavorite([...item])
  }
  
  return (
    <BabysitterContext.Provider
    value={{ babySitterArray, setBabySitterArray, isFavorite, setFavorite, addFavorite }}
    >
      {children}
    </BabysitterContext.Provider>
  );
}
