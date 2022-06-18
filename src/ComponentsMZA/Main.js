import React from "react";

const Main = () => {
  return (
    <>
      <div class="container mt-5 ">
        <h2 className="display-5 ">
          Welcome to React website created by MZA Shawn!
        </h2>
        <div class="mt-4 p-5 bg-primary text-white rounded d-flex justify-content-end">
          <p>
            "Great post, very useful in analysing data. Also, trust all the
            ideas you’ve introduced on your site"
          </p>
        </div>

        {/* // JUmbotron ends here */}
      </div>{" "}
      <div className="container  my-4">
        <div className="row">
          <div className="col-lg-3">
            {/* //1st card */}
            <div className="card ">
              <img
                src="../Images/1.jpg"
                width={"200px"}
                height={"200px"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title bg-info rounded-pill">First Card</h5>
                <p className="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-danger">
                  Show more
                </a>
              </div>
            </div>
          </div>

          {/* //2nd card */}
          <div className="col-lg-3">
            <div className="card ">
              <img
                src="../Images/2.jpg"
                width={"200px"}
                height={"200px"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title bg-info rounded-pill">Second Card</h5>
                <p className="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-danger">
                  Show more
                </a>
              </div>
            </div>
          </div>

          {/* 3rd card */}
          <div className="col-lg-3">
            <div className="card ">
              <img
                src="../Images/3.jpg"
                width={"200px"}
                height={"200px"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title bg-info rounded-pill">Third Card</h5>
                <p className="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-danger">
                  Show more
                </a>
              </div>
            </div>
          </div>
          {/* 4th card */}
          <div className="col-lg-3">
            <div className="card ">
              <img
                src="../Images/4.jpg"
                width={"200px"}
                height={"200px"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title bg-info rounded-pill">Third Card</h5>
                <p className="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-danger">
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
