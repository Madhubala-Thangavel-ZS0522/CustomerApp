import React from "react";
import Header from "./core/layout/Header";
import Footer from "./core/layout/Footer";
import Categories from "./core/components/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopByCategory from "./core/components/ShopBycategory";
import Register from "./core/components/Register";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* <Categories /> */}
        <Register />
        {/* <Footer /> */}
        {/* <main className="app_main">
          <Routes>
            <Route path="/shopbycategory" element={<ShopByCategory />} />
          </Routes>
        </main> */}
      </div>
    </Router>
  );
};

export default App;
