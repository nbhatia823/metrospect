import React, { Component } from "react"
import "../../styles/modules/module.css"

export default class Module extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstModule: false
    }
    this.isfirstModule()
  }
  isfirstModule(props) {
    if (this.props.firstModule == "true") {
      return "first-module-padding"
    } else return
  }
}
