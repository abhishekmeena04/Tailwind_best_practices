import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Login from "./components/Login";
import Addproduct from "./components/Addproduct";
import GetProducts from "./components/GetProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/add/product" element={<Addproduct />} />
          <Route path="/get/products" element={<GetProducts />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
