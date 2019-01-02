import React, { Component } from "react"
import "../styles/article.css"
import HorizontalScroll from "react-scroll-horizontal"
import jitlada1 from "../assets/img/jitlada-1.jpg"
import jitlada2 from "../assets/img/jitlada-2.jpg"
import BigQuote from "./modules/bigquote.js"
import BigImage from "./modules/bigimage.js"

export default class Article extends Component {
  render() {
    const { className } = this.props
    return (
      <HorizontalScroll>
        <BigQuote
          text={
            <i>
              "Our kitchen is small. <br /> Our <b>love for food is big.</b>
              <br /> Please be patient if your food is a little late. <br />
              We promise Jitlada's food is worth the wait."
            </i>
          }
        />
        <BigImage src={jitlada2} caption="Optional Caption" />
        <section className={className}>
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
