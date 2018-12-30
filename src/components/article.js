import React, { Component } from "react"
import "../styles/article.css"
import HorizontalScroll from "react-scroll-horizontal"

export default class Article extends Component {
  render() {
    const { className } = this.props
    return (
      <HorizontalScroll>
        <section className={className}>
          <div className="component">
            <div className="quote-1">
              <i>
                "Our kitchen is small. <br /> Our <b>love for food is big.</b>
                <br /> Please be patient if your food is a little late. <br />
                We promise Jitlada's food is worth the wait."
              </i>
            </div>
          </div>
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
