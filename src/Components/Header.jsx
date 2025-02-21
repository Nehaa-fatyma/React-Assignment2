import React from "react";
import Logo from "./Logo";

const Header = (props) => {
  return (
      <header className="header">
      <Logo/>
      <nav className="nav">
        <a href="home">Home</a>
        <a href="products">Products</a>
        <a href="about">About</a>
        <a href="contact">Contact</a>
      </nav>

    </header>
  );
};

export default Header;
