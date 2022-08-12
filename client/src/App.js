import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
