import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Header from "./components/header";
import Signup from "./pages/register/signup";
import Login from "./pages/register/login";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Header/>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Shop/>} />
          <Route path="/cart" element = {<Cart/>}/>
          <Route path ='/signup' element = {<Signup/>} />
          <Route path ='/login' element = {<Login/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
