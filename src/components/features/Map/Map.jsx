import "./map.css";
import { useCallback, useMemo, useRef , useState , useContext } from "react";
import { GoogleMap, CircleF, MarkerF } from "@react-google-maps/api";
import MapCard from "./MapCard";
import { Offcanvas, Stack } from "react-bootstrap";
import { BabysitterContext } from "../../../context/BabySitterContext";



export default function Map() {
//  const {babySitterArray,setBabySitterArray} = BabySitterContext()
const {babySitterArray,setBabySitterArray}=useContext(BabysitterContext)

 const [x,setX]=useState(babySitterArray)
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 31.768318, lng: 35.213711 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUi: true,
      clickableIcons: true,
    }),
    []
  );

 
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const houses = useMemo(()=> generateHouses(center), [center])
  const[isMapCardOpen, setIsMapCardOpen] = useState(false)
  const openMapCard = (obj) => {
    setX(obj)
    setIsMapCardOpen(true)
     
  }


  const closeMapCard = () => setIsMapCardOpen(false)
  return (
    <div className="container">
      <div className="controls">
        <h1>commute</h1>
         
      </div>
      <div className="map">
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {
            <>
              <MarkerF
                position={{ lat: 31.768318, lng: 35.213711 }}
                icon={{
                  url: "https://img.icons8.com/stickers/100/000000/street-view.png",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              ></MarkerF>

             
             {houses.map((houses,index) => <MarkerF
             
              key={houses.lat} 
              onClick={() => {
                openMapCard(babySitterArray[index]) 
                  }}
              position={houses}
              icon={{
                url: "https://img.icons8.com/stickers/100/000000/user-female-circle-skin-type-3.png",
                scaledSize: new window.google.maps.Size(50, 50),
              }}
              >
                
                
               
               </MarkerF>
               
               )}
        <MapCard isMapCardOpen={isMapCardOpen} closeMapCard={closeMapCard} text={x}/>
               
              <CircleF center={center} radius={1500} options={closeOptions} />
              <CircleF center={center} radius={3500} options={middleOptions} />
              <CircleF center={center} radius={5500} options={farOptions} />
            </>
          }
        </GoogleMap>
      </div>
    </div>
  );
}





const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.25,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.30,
  strokeColor: "#1b6600",
  fillColor: "#1b6600",
};

const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.15,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};


const generateHouses = (position )=>{
  const _houses =[]
  for (let i=0 ; i<10; i++){
    const direction = Math.random() *(324-20) +20
    _houses.push({
      lat:position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction
    })

  }
  return _houses
}