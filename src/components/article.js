import React, { Component } from "react";
import "../styles/article.css";

export default class Article extends Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <div className="component" />
        <div className="component" />
        <div className="component" />
        <div className="component" />
        <div className="component" />
        <div className="component" />
        <div className="component" />
        <div className="component" />
      </section>
    );
  }
}
