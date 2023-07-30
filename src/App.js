import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import NavBar from './components/features/Navbar/Navbar.component';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Login from "./components/features/login"
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCardProvider } from './context/StoreContext'
function App() {
  return (
<>
<BrowserRouter>
<ShoppingCardProvider>
  <NavBar/>
   <Router/>
</ShoppingCardProvider>
</BrowserRouter>
    
</>
  );
}

export default App;
