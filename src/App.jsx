// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp6 from "./Components/Comp6";
import Firstpage from "./Firstpage";
import { ThemeProvider } from "./ContextComponent";
import Product1 from "./Components/Product/Product1";

import AboutMain from "./Components/Product/AboutMain";
import Features from "./Components/Product/Features";
import Feature from "./Components/Product/Feature";
import CheckOut from "./Components/Product/CheckOut";
import Login from './Login/Login'; // Your Login component

function Layout({ children }) {
  const location = useLocation();

  // Exclude `Comp1` and `Comp6` on the login page
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <>
      {!hideHeaderFooter && <Comp1 />}
      {children}
      {!hideHeaderFooter && <Comp6 />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Firstpage />} />
            <Route path="/Product" element={<Product1 />} />
            <Route path="/LearnMore" element={<Features />} />
            <Route path="/Feature" element={<Feature />} />
            <Route path="/About" element={<AboutMain />} />
            <Route path="/CheckOut" element={<CheckOut />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
