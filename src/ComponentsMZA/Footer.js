import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid px-0 my-4">
      <div className="card">
        <div className="card-header">Featured content</div>
        <div className="card-body">
          <h5 className="card-title">Click this link!</h5>
          <p className="card-text">
            <a href="https://www.tutorialabc.com/" target={"_blank"}>
              {" "}
              View recent post
            </a>
          </p>
          <h6 className="mt-5  text-info rounded-pill">
            All rights reserved by tutorialabc.com{" "}
            <pre className="text-warning">&copy; copyright- 2022 </pre>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
