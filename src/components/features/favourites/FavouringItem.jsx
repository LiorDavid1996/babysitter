import { Photo } from "@mui/icons-material";

export default function FavouringItem({item}) {
 const {name,Photo}=item.text;
  console.log(name);
  return (
    <div
      className="d-flex align-items-center  border "
      style={{ width: "100%" }}
      
    >
      <img
        className="rounded-circle"
        style={{ width: "100px", height: "100px" }}
        src={Photo}
      ></img>
      <h1>{name}</h1>
      <button>move</button>
      <button>see </button>
    </div>
  );
}
