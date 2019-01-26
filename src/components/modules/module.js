import React, { Component } from "react"
import "../../styles/modules/module.css"

export default class Module extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moduleStyles: ""
    }
  }

  componentWillMount() {
    this.callModuleStyles()
  }

  addModuleStyles() {
    console.log("addmod")
    return this.state.moduleStyles
  }

  callModuleStyles() {
    // Add styles to this.
    this.isfirstModule()
    this.textAlign()
    this.fontWeight()
  }
  isfirstModule() {
    if (this.props.firstModule === "true") {
      // Note the functional setstate syntax to maintain synchronity
      this.setState((state) => ({
        moduleStyles: state.moduleStyles + " first-module-margin"
      }))
    } else return
  }

  textAlign() {
    if (this.props.textAlign === "right") {
      const moduleStyles = this.state.moduleStyles + " first-align-right"
      this.setState({ moduleStyles })
      return "text-align-right"
    } else if (this.props.textAlign === "center") {
      const moduleStyles = this.state.moduleStyles + " text-align-center"
      this.setState({ moduleStyles })
      return "text-align-center"
    } else return
  }

  fontWeight() {
    if (this.props.fontWeight === "lighter") {
      this.setState((state) => ({
        moduleStyles: state.moduleStyles + " text-light"
      }))
    } else if (this.props.fontWeight === "bold") {
      this.setState((state) => ({
        moduleStyles: state.moduleStyles + " text-bold"
      }))
    } else return
  }
}
