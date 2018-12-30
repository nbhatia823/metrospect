import React, { Component } from "react"
import "../styles/article.css"
import HorizontalScroll from "react-scroll-horizontal"

export default class Article extends Component {
  render() {
    const { className } = this.props
    return (
      <HorizontalScroll>
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
      </HorizontalScroll>
    )
  }
}
