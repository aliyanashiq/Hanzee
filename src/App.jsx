import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp6 from "./Components/Comp6";
import Firstpage from "./Firstpage";
import { ThemeProvider } from "./ContextComponent";
import Product1 from "./Components/Product/Product1";
import Cart from "./Components/Product/Cart";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Comp1 />
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Product" element={<Product1 />} />
          <Route path="/Shopping Cart" element={<Cart />} />
        </Routes>
        <Comp6 />
      </Router>
    </ThemeProvider>
  );
}

export default App;
