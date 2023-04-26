import Header from "./ShopHub/Components/Header";
import Products from "./ShopHub/Components/Products";
import Login from "./ShopHub/Components/Login";
import Signup from "./ShopHub/Components/Signup";
import Cart from "./ShopHub/Components/Cart";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
