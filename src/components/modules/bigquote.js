import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/bigquote.css"
import Module from "./module.js"

export default class BigQuote extends Module {
  render() {
    return (
      <div className={["module", this.addModuleStyles()].join("")}>
        <div className={"big-quote"}>
          <i>{this.props.text}</i>
        </div>
      </div>
    )
  }
}
