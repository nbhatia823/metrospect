import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/shortparagraph.css"
import Module from "./module.js"

export default class ShortParagraph extends Module {
  render() {
    return (
      <div className={["module", this.addModuleStyles()].join("")}>
        <div className={"short-paragraph"}>
          <i>{this.props.text}</i>
        </div>
      </div>
    )
  }
}
