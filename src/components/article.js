import React, { Component } from "react"
import "../styles/article.css"
import IndiaGrillArticle from "./articles/article-indiagrill"

export default class Article extends Component {
  SelectedArticle() {
    if (this.props.selectedArticle === "India's Best Grill") {
      console.log(this.props.selectedArticle)
      return <IndiaGrillArticle />
    } else if (this.props.selectedArticle === "Coffee Connection") {
      console.log(this.props.selectedArticle)
      return <IndiaGrillArticle />
    }
  }
  render() {
    const { className, selectedArticle } = this.props
    return <IndiaGrillArticle />
  }
}
