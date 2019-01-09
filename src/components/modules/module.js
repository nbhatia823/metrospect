import React, { Component } from "react"
import "../../styles/modules/module.css"

export default class Module extends Component {
  constructor(props) {
    super(props)
    this.isfirstModule(props)
    this.textAlign(props)
  }

  isfirstModule(props) {
    if (props.firstModule === "true") {
      return "first-module-padding"
    } else return
  }

  textAlign(props) {
    if (props.textAlign === "right") {
      return "text-align-right"
    } else if (props.textAlign === "center") {
      return "text-align-center"
    } else return
  }
}
