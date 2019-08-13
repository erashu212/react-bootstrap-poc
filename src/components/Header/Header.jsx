import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "assets/images/logo.svg";
import "./Header.scss";

const Header = __ => {
  return (
    <Navbar as="header" bg="app" className="ps-navbar ps-bg-app">
      <Navbar.Brand className="ml-auto align-items-center">
        <img src={logo} className="ps-logo" alt=""/>
        <span className="ps-brand-title">POC</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
