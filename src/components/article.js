import React, { Component } from "react"
import "../styles/article.css"
import IndiaGrillArticle from "./articles/article-indiagrill"

export default class Article extends Component {
  SelectedArticle() {
    if (this.props.selectedArticle === "India's Best Grill") {
      return <IndiaGrillArticle />
    } else if (this.props.selectedArticle === "Coffee Connection") {
      return <IndiaGrillArticle />
    }
  }
  render() {
    const { className, selectedArticle } = this.props
    return <>{this.SelectedArticle()}</>
  }
}
