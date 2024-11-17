

 import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../Context";

function Navbar() {
  const { searchQuery, setSearchQuery, setFilterBy } = useGlobal();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <h5 className="navbar-brand" href="#">
            TaskManager
          </h5>
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
            {/* Search Bar */}
            <div className="d-flex justify-content-center mx-auto w-100">
              <input
                className="form-control me-2"
                style={{ maxWidth: "600px", width: "70%" }} // Centered and takes more width
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Title"
                aria-label="Search"
              />
            </div>

            {/* Filter Dropdown for more filter option lik old to new,priority wise*/}
            <select
              className="form-select mx-2"
              style={{ width: "150px" }} // Reduced width
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option value="">Filter By</option>
              <option value="priority-high-to-low">Priority: High to Low</option>
              <option value="priority-low-to-high">Priority: Low to High</option>
              <option value="date-new-to-old">Date: New to Old</option>
              <option value="date-old-to-new">Date: Old to New</option>
            </select>

            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="btn btn-outline-success mx-1" aria-current="page">
                  All Task
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="btn btn-outline-danger mx-1">
                  Add Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar