import React from "react";
// npm i react-dom
// npm install
// npx create-react-app (Name of project)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Map";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/map" element={<Location />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
