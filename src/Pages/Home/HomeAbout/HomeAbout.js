import React from "react";

const HomeAbout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/01-1.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 my-auto">
            <h4 className="text-orange">About Us</h4>
            <h2>Delivering Exceptional Roofing Services</h2>
            <div className="d-flex">
              <div>
                <img
                  className="img-fluid"
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/01-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>25</span>
                <h4>Years Of Experience Roofing Services</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolore laudantiums totam rem aperiam, eaque ipsa
                  illo inventore veritatis et quasi architecto beatae
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <div>
                  <p>Standard Working</p>
                  <p>Commercial Solutions</p>
                </div>
                <div>
                  <p>Awards Winning Agency</p>
                  <p>Industrial Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
