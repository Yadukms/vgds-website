import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
          <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
