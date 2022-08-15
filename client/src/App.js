import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/pages/Home/Home";
import Login from "./admin/pages/Login/Login";
import "./app.scss";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Products from "./pages/Products";
import References from "./pages/Reference";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/references" element={<References />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
