import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    console.log(this.props);

    const articleLinks = this.props.articles.map(articleTitle => {
      const className =
        this.props.selectedArticle === articleTitle ? "selected" : "unselected";
      return (
        <li className="articleLink">
          <a className={className}>{articleTitle}</a>
        </li>
      );
    });

    return (
      <footer className="footer">
        <h1 className="issueTitle">{this.props.issueTitle}</h1>
        <ul className="articleLinks">{articleLinks}</ul>
      </footer>
    );
  }
}
