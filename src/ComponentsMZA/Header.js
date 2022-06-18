import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple React Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.tutorialabc.com/"
                target={"_blank"}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.tutorialabc.com/p/tutorial-abc-is-website-which-is.html"
                target={"_blank"}
              >
                About US
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.tutorialabc.com/p/the-information-contained-on-tutorialabc.html"
                target={"_blank"}
              >
                Disclaimer
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.tutorialabc.com/p/tutorial-abc-is-website-which-acts-as.html"
                target={"_blank"}
              >
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.tutorialabc.com/p/contact.html"
                target={"_blank"}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
