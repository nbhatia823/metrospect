import React, { Component } from "react"
import Module from "./module.js"
import "../../styles/article.css"
import "../../styles/modules/bigimage.css"

export default class BigImage extends Module {
  render() {
    return (
      <div
        className={[
          "component",
          "flex-direction-column",
          this.isfirstModule(this.props)
        ].join(" ")}
      >
        <div className={[" big-image-container"].join(" ")}>
          <img className="big-image" src={this.props.src} alt="Big Jitlada" />
        </div>
        <div className="big-image-caption">{this.props.caption}</div>
      </div>
    )
  }
}
