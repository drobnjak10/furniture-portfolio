import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
