import React from "react";
import Records from "../../db.json";
import "./Categories.css";

const Categories = () => {
  return (
    <>
      <div className="container">
        <div>
          <a> Categories</a>
        </div>
        <div className="row">
          <div className="row-2">
            {Records.images.map((records) => (
              <div key={records.id} className="record-items">
                <img src={records.url} alt="name" />
                <div className="record-title"> {records.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
