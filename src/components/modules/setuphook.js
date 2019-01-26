import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/setuphook.css"
import Module from "./module.js"

export default class SetupHook extends Module {
  render() {
    return (
      <div className="module">
        <div
          className={["flex-direction-column", this.addModuleStyles()].join(
            " "
          )}
        >
          <div className="setup">{this.props.setup}</div>
          <div className="hook">{this.props.hook}</div>
          <i>{this.props.text}</i>
        </div>
      </div>
    )
  }
}
