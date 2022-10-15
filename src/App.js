import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import NavBar from './components/features/Navbar/Navbar.component';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <NavBar/>
    <Router/>

    </BrowserRouter>

  );
}

export default App;
