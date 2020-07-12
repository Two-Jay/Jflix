import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Main</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Navigation;
