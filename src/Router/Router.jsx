import { Route, Routes } from "react-router-dom";
import {
  Home,
  Post,
  Connect,
  Babysever,
  AboutUs,
  Shop,
  Babysitter,
} from "../components/index";
import TagInput from "../components/features/Map/Test";
import Login from "../components/features/login";
import SignUp from "../components/features/Signup";
import ProtectedRoute from "../components/protectedRoute";
import BabySitterProvider from "../context/BabySitterContext";

export default function Router() {
  return (
   <BabySitterProvider>
      <Routes>
          <Route path="/Post" element={<Post />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Babysever" element={<Babysever />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Babysitter" element={<Babysitter /> } />
        

        <Route path="/" element={<TagInput />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingUp" element={<SignUp />} />
      </Routes>
      </BabySitterProvider>
  );
};
