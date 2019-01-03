import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/bigquote.css"
import Module from "./module.js"

export default class BigQuote extends Module {
  render() {
    return (
      <div className="component">
        <div
          className={["big-quote", this.isfirstModule(this.props)].join(" ")}
        >
          <i>{this.props.text}</i>
        </div>
      </div>
    )
  }
}
