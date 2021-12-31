import NavComp from "./components/navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/details/:pid" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
