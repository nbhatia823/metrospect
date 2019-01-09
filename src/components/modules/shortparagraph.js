import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/shortparagraph.css"
import Module from "./module.js"

export default class ShortParagraph extends Module {
  render() {
    return (
      <div className="component">
        <div
          className={["short-paragraph", this.isfirstModule(this.props)].join(
            " "
          )}
        >
          <i>{this.props.text}</i>
        </div>
      </div>
    )
  }
}
