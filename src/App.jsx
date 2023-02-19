import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MobileBanner from "@/components/MobileBanner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "@/components/categorys/Home";
import BlackLine from "@/components/categorys/BlackLine";
import GreenLine from "@/components/categorys/GreenLine";
import BlueLine from "@/components/categorys/BlueLine";
import PinkLine from "@/components/categorys/PinkLine";
import OrangeLine from "@/components/categorys/OrangeLine";
import WhiteLine from "@/components/categorys/WhiteLine";
function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <MobileBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto1" element={<PinkLine />} />
          <Route path="/producto2" element={<OrangeLine />} />
          <Route path="/producto3" element={<WhiteLine />} />
          <Route path="/producto4" element={<GreenLine />} />
          <Route path="/producto5" element={<BlackLine />} />
          <Route path="/producto6" element={<BlueLine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
