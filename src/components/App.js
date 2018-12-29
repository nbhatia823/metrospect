import React, { Component } from "react";
import logo from "../logo.svg";

import Header from "./header.js";
import Footer from "./footer.js";

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArticle: "Jitlada 5ever",
      articles: [
        "Jitlada 5ever",
        "India's best grill",
        "Friday heaven",
        "Out of plates",
        "Tu tacos pls",
        "Coffee connection"
      ],
      issueTitle: "01. Salve"
    };
  }
  render() {
    const { selectedArticle, articles, issueTitle } = this.state;

    return (
      <>
        <Header />
        <Footer
          selectedArticle={selectedArticle}
          articles={articles}
          issueTitle={issueTitle}
        />
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
