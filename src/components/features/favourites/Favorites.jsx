import React from "react";
import { useState } from "react";
import FavouringItem from "./FavouringItem";
import { BabysitterContext } from "../../../context/BabySitterContext";
import { useContext } from "react";

export default function Favorites() {
  const { isFavorite, setFavorite } = useContext(BabysitterContext);

  return (
    <div className="border" style={{ width: "40vw" }}>
      <h2 className="border">your Favorites</h2>
      { isFavorite.length!=0 ? 

      isFavorite.map((item)=>
      <FavouringItem item={item} /> 
        
      )

      : <h1>no favorite yet </h1> }
    </div>
  );
}
