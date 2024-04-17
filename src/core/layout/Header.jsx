import React, { useState } from "react";
import "./Header.css";
import Logo from "/assets/Logo.png";
import SearchIcon from "/assets/Search.png";
import Location from "/assets/placeholder.png";
import Profile from "/assets/accounticon.png";
import NotificationIcon from "/assets/Notification.png";
import CartIcon from "/assets/cart.png";
import downarrow from "/assets/down-arrow.svg";
import { useNavigate } from "react-router-dom";
import ShopByCategory from "../components/ShopBycategory";

const Header = () => {
  const [isShopByCategoryVisible, setShopByCategoryVisible] = useState(false);
  const handleShopByCategoryClick = () => {
    setShopByCategoryVisible(!isShopByCategoryVisible);
  };
  return (
    <>
      <div className="app-header border">
        <div className="row justify-content-between align-items-center mx-3">
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <img src={Logo} alt="app-logo" />
              </div>
              <div className="col-4">
                <a onClick={handleShopByCategoryClick}>Shop By Category</a>
                <img
                  onClick={handleShopByCategoryClick}
                  src={downarrow}
                  alt=""
                />
              </div>
              <div className="Farms col-4">
                <a>Explore Farms</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className=" d-flex align-items-center gap-3">
              <div className="Search-Icons d-flex gap-2 text-right">
                <img src={SearchIcon} alt="" className="icons" />
                <a>Search</a>
              </div>
              <div className=" d-flex gap-2">
                <img src={Location} alt="" className="icons" />
                <a>Location</a>
              </div>
              <div className="d-flex gap-2">
                <img src={Profile} alt="" className="icons" />
                <img src={NotificationIcon} alt="" className="icons" />
                <img src={CartIcon} alt="" className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShopByCategoryVisible ? <ShopByCategory /> : ""}
    </>
  );
};

export default Header;
