import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MobileBanner from "@/components/MobileBanner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import BlackLine from "@/components/categorys/BlackLine";
import GreenLine from "@/components/categorys/GreenLine";
import SkyLine from "@/components/categorys/SkyLine";
import BlueLine from "@/components/categorys/BlueLine";
function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <MobileBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlackLine />} />
          <Route path="/producto2" element={<GreenLine />} />
          <Route path="/producto3" element={<SkyLine />} />
          <Route path="/producto4" element={<BlueLine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
