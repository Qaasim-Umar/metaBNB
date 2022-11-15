import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Nft from "./pages/Nft";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nft" element={<Nft />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
