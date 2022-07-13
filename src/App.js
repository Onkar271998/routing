
import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from "./Component/Navbar" 
import Home from "./Pages/Home"
import AllProducts from './Pages/AllProducts';
import ProductDetails from './Pages/ProductDetail';
function App() {
  return (
    <div className="App"> 
    <Navbar/>
        <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/AllProducts" element={<AllProducts/>}></Route>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
