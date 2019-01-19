import React, { Component } from "react"

import Header from "./header.js"
import Article from "./article.js"
import Footer from "./footer.js"

import "../styles/App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedArticle: "India's Best Grill",
      articles: [
        "Jitlada 5ever",
        "India's Best Grill",
        "Friday heaven",
        "Out of plates",
        "Tu tacos pls",
        "Coffee connection"
      ],
      issueTitle: "01. Salve"
    }
  }

  articleClickHandler = (e) => {
    const selectedArticle = e.target.value
    if (selectedArticle === this.state.selectedArticle) return
    else {
      this.setState({ selectedArticle })
      console.log(selectedArticle)
    }
  }

  render() {
    const { selectedArticle, articles, issueTitle } = this.state

    return (
      <div className="viewport">
        <Header className="header" />
        <Article className="article" selectedArticle={selectedArticle} />
        <Footer
          className="footer"
          selectedArticle={selectedArticle}
          articles={articles}
          issueTitle={issueTitle}
          articleClickHandler={this.articleClickHandler}
        />
      </div>
    )
  }
}

export default App
