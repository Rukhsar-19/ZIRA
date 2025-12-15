import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Commonstyles.css";
// import "remixicon/fonts/remixicon.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Catalog from "./Components/Catalog";
import Dishes from "./Components/Dishes";
import Productcard from "./Components/Productcard";
import We from "./Components/We";
import Gallery from "./Components/Gallery";
import Cookies from "./Components/Cookies";
import Search from "./Components/Search";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dishes" element={<Dishes />} />
           <Route path="/product" element={<Productcard />} />
           <Route path="/we" element={<We/>} />
           <Route path="/gallery" element={<Gallery/>} />
           <Route path="/cookies" element={<Cookies/>} />
           <Route path="/search" element={<Search/>} />
           
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
