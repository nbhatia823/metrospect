import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/bigquote.css"

export default class BigQuote extends Component {
  render() {
    return (
      <div className="component">
        <div className="big-quote">
          <i>{this.props.text}</i>
        </div>
      </div>
    )
  }
}
