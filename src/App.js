import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./css/Style.css";
import "./css/Oldcss.css";
import "aos/dist/aos.css";
import "./css/font/stylesheet.css";
import "./css/Responsive.css";
import Aos from "aos";
import Header from "./components/Header";

function App() {
  Aos.init();
  return (
    <>
    {/* <Header/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
