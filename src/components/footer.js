import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    const {
      articles,
      selectedArticle,
      issueTitle,
      className,
      articleClickHandler
    } = this.props;

    const articleLinks = articles.map(articleTitle => {
      const className =
        selectedArticle === articleTitle ? "selected" : "unselected";
      return (
        <li key={articleTitle}>
          <button
            value={articleTitle}
            className={className}
            onClick={articleClickHandler}
          >
            {articleTitle}
          </button>
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
