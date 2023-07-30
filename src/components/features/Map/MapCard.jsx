import { Offcanvas, Stack } from "react-bootstrap";
import { useContext } from "react";
import Favorites from "../favourites/Favorites";
import { BabysitterContext } from "../../../context/BabySitterContext";
import { useEffect } from "react";

export default function MapCard({ isMapCardOpen, closeMapCard, text }) {
  const { isFavorite, setFavorite ,isInFavorites} = useContext(BabysitterContext);

  // useEffect(() => {
  //   setFavorite([...text]);
  // }, []);
  

  const {
    id,
    name,
    lastName,
    phone,
    photo,
    facebook,
    instergram,
    Recommend,
    bs,
    description,
  } = text;


  return (
    <Offcanvas show={isMapCardOpen} onHide={closeMapCard}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="  text-muted border-bottom">
          <h1>
            {name} {lastName}
          </h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack direction="" gap={1} className="d-flex align-items-center  ">
          <img
            src={photo}
            className="rounded-circle"
            style={{ width: "250px", height: "200px" }}
          />
          <div gap={5} className="mb-4 align-items-center">
            <div class="d-flex justify-content-around">
              <img
                src="picture/Facebook_Logo_(2019).png.webp"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="picture/Instagram-logoPNG.png"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="picture/whatsapplogoo.png"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="picture/favicon.ico"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
            <p>{description}</p>

            <h6>
              {Recommend ? Recommend[0].name : ""}{" "}
              {Recommend ? Recommend[0].description : ""}{" "}
              {Recommend ? Recommend[0].Contact : ""}
            </h6>
            <h6>
              {Recommend ? Recommend[1].name : ""}{" "}
              {Recommend ? Recommend[1].description : ""}{" "}
              {Recommend ? Recommend[1].Contact : ""}
            </h6>
            <h6>
              {Recommend ? Recommend[2].name : ""}{" "}
              {Recommend ? Recommend[2].description : ""}{" "}
              {Recommend ? Recommend[2].Contact : ""}
            </h6>
          </div>
          <div>
            <button onClick={()=>{
             isInFavorites({text})
              // setFavorite([{text},...isFavorite])

            }}>add favorite</button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
