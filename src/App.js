import React from "react";
// npm i react-dom
// npm install
// npx create-react-app (Name of project)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer"
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Specials from "./pages/Specials";
import Location from "./pages/Map";
import About from "./pages/About"
function App() {
  return (
    <div>
      <Header/>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/map" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
export default App;