import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
