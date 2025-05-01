import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Seller from "./pages/seller/Seller";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/seller' element={<Seller/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;