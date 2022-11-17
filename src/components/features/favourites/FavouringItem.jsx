import { Photo } from "@mui/icons-material";
import { BabysitterContext } from "../../../context/BabySitterContext";
import { useContext } from "react";
export default function FavouringItem({ item }) {
  const {deleteFavorite} = useContext(BabysitterContext)
  
  const { name, photo,lastName,id  } = item.text;

  
  return (
    <div 
      className="d-flex align-items-center  border "
      style={{width:'100%' }}
    >
      <img
        src={photo}
        className="rounded-circle"
        style={{ width: "10vw", height: "10vw" }}
      ></img>
      <h1>{name} {lastName}</h1>
      <button onClick={() => {
        console.log(id);
        deleteFavorite(id)
      }} >remove</button>
      <button>details</button>
    </div>
  );
}
