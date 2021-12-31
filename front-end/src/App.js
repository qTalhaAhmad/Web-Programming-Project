import NavComp from "./components/navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/user/Register" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/details/:pid" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
