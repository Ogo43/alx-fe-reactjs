import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#2b2b2bff",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: "1.2rem",
          justifyContent: "flex-end",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "white",
              borderBottom: "2px solid red",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
