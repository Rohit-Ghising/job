import React from "react";
import ProductLists from "./assets/component/ProductLists";
import Navbar from "./assets/component/Navbar";
import HomePage from "./assets/component/HomePage";
import ProductPages from "./assets/component/ProductPages";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SingleProductPage from "./assets/component/pages/SingleProductPage";
import LoginPage from "./assets/component/pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/Product" element={<ProductPages />} />
        </Route>

        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <h1 className="bg-red-500"> HI</h1>
      <ProductLists />
    </div>
  );
};

export default App;
