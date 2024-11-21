// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp6 from "./Components/Comp6";
import Firstpage from "./Firstpage";
import { ThemeProvider } from "./ContextComponent";
import Product1 from "./Components/Product/Product1";
import Features from "./Components/Product/Features";


function App() {
  
  return (
    <ThemeProvider>
      <Router>
      
        <Comp1 />
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Product" element={<Product1 />} />
          <Route path="/Feature" element={<Features />} />
        </Routes>
        
        <Comp6 />
      </Router>
    </ThemeProvider>
  );
}

export default App;
