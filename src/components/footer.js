import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    const { articles, selectedArticle, issueTitle, className } = this.props;

    const articleLinks = articles.map(articleTitle => {
      const className =
        selectedArticle === articleTitle ? "selected" : "unselected";
      return (
        <li key={articleTitle} className="articleLink">
          <a className={className}>{articleTitle}</a>
        </li>
      );
    });

    return (
      <footer className={className}>
        <h1 className="issueTitle">{issueTitle}</h1>
        <ul className="articleLinks">{articleLinks}</ul>
      </footer>
    );
  }
}
