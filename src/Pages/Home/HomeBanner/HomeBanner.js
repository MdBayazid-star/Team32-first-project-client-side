import React from "react";
import "./../Home.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h4 className="text_orange mt-5">Services & Repairs</h4>
            <h1 className="text-light">Roofing Contractors</h1>
            <p className="text-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus, a quas! Repellendus, recusandae! Perspiciatis nesciunt
              ea exercitationem iure maiores labore ipsam quidem alias harum
              earum consequuntur fuga, molestias libero deserunt.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/01.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
