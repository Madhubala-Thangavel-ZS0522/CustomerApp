import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="Navbar_list">
        <ul>
          <a href="/Shop By Category">ShopBy Category</a>
        </ul>
        <ul>
          <a href="/Explore farms">Explore Farms </a>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
