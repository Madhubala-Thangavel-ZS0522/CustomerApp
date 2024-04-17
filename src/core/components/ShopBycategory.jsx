import React, { useState } from "react";
import Records from "../../db.json";
import "./ShopByCategory.css";
import Allcategory from "./Categories";

const ShopByCategory = () => {
  const [isCategoryVisible, setCategoryVisible] = useState(false);
  //const [color, setcolor] = useState("#80b435");

  const handleCategoryClick = () => {
    setCategoryVisible(!isCategoryVisible);
  };
  return (
    <>
      {!isCategoryVisible && (
        <div className="wrap">
          <div className="card-group">
            {Records.categories.map((category) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <div className="card-value">
                    {category.items.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                  <a href="#" className="view-all">
                    View All
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-categories" onClick={handleCategoryClick}>
            View All Categories
          </div>
        </div>
      )}
      {isCategoryVisible ? <Allcategory /> : ""}
    </>
  );
};

export default ShopByCategory;
