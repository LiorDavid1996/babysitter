import Map from "../../features/Map/Map";
import "./Babysitter.css";
import{useLoadScript} from '@react-google-maps/api'
import React ,{useState} from "react";
import Favorites from "../../features/favourites/Favorites";




function Babysitter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries:["places"]
      })
      if(!isLoaded) return <div>loading...</div>
      return (
        <>
         <Map/>
          <Favorites/>
       
         </>

      )
     
 
}
export default Babysitter;
