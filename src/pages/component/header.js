import React from "react";
import { StyledHeader } from "./header.styles.js";
import { Link } from "react-router-dom";

// Styled component version of the Header component
const Header = () => {
  return (
    <StyledHeader>
      <section className="header">
        <nav className="header_logo">
          <img src="/image/logo.jpg" height="50" alt="" />
          <li>Edu Pulse</li>
        </nav>
        <nav className="product">
          <Link className="nav-link" to="/product">Product</Link>
          <Link className="nav-link" to="/pricing">Pricing</Link>
          <Link className="nav-link" to="/resource">Resources</Link>
        </nav>
        <nav className="logo">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
        </nav>
      </section>
    </StyledHeader>
  );
}

export default Header;
