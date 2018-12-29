import React, { Component } from "react";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">metrospect</h1>
        <p className="search">search</p>
      </header>
    );
  }
}
