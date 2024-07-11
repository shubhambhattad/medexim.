import React from "react";

function CategoryCard({ category }) {
  return (
    <div className="col-md-4">
      <div className="service-block blue">
        {/* <img src={category.image} alt="#" /> */}
        <h3>{category.name}</h3>
        <p>dfh jfyjhfh hfh sdghsdysrwyjhsdfjrtsetyghjgjkyuoyusr </p>
        <a href="#" className="btn btn-dark">
          GET THIS
        </a>
        <div className="service-bg-icon">
          {/* <img src={category.image} className="img-fluid" alt="#" /> */}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
