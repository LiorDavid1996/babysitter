import { Route, Routes } from "react-router-dom";
import Gome from "../components/pages/Home/Home";

 function Router() {
<Routes>
    <Route path="/" element={<Gome/>}/>
</Routes>
    
}
export default Router;