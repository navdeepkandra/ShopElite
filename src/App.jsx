import "./App.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
      </Routes>
    </>
  );
}

export default App;
