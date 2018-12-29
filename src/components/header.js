import React, { Component } from "react";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    const { className } = this.props;

    return (
      <header className={className}>
        <h1 className="title">metrospect</h1>
        <p className="search">search</p>
      </header>
    );
  }
}
