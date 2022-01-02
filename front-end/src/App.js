import NavComp from "./components/navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import Order from "./components/Cart/Order";
import PrevOrder from "./components/Cart/PrevOrder";
import CurrOrders from "./components/Admin/CurrOrders";
import PrevOrders from "./components/Admin/PrevOrders";
import AddProduct from "./components/Admin/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/Cart" element={<Cart />} />
      <Route path="/user/PrevOrder" element={<PrevOrder />} />
      <Route path="/admin/addProduct" element={<AddProduct />} />
      <Route path="/user/order" element={<Order />} />
      <Route path="/user/Register" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/details/:pid" element={<ProductDetails />} />
      <Route path="/admin/currOrders" element={<CurrOrders />} />
      <Route path="/admin/prevOrders" element={<PrevOrders />} />
    </Routes>
  );
}

export default App;
