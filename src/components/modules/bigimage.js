import React, { Component } from "react"
import "../../styles/article.css"
import "../../styles/modules/bigimage.css"

export default class BigImage extends Component {
  render() {
    return (
      <div className="component flex-direction-column">
        <div className="big-image-container">
          <img className="big-image" src={this.props.src} alt="Big Jitlada" />
        </div>
        <div className="big-image-caption">{this.props.caption}</div>
      </div>
    )
  }
}