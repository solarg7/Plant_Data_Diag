import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        {/* <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button> */}
        <a href="/" className="navbar-brand" id="navTitle">
          <strong>Plant</strong> <strong>dataTrend</strong>
        </a>
          <a className="navbar-brand" id="navTitle2"><article className="glyphicon glyphicon-scale" ></article> Manual Data Capture Pilot Module <article className="glyphicon glyphicon glyphicon-bell"></article></a>
      </div>
    </div>
  </nav>
);

export default Nav;
