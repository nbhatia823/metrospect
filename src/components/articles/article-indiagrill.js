import React, { Component } from "react"
import "../../styles/article.css"
import HorizontalScroll from "react-scroll-horizontal"
import IndiaGrill3 from "../../assets/img/india-grill-3.png"
import IndiaGrill6 from "../../assets/img/india-grill-6.png"
import IndiaGrill9 from "../../assets/img/india-grill-9.png"
import IndiaGrill1 from "../../assets/img/india-grill-1.png"
import IndiaGrill2 from "../../assets/img/india-grill-2.png"
import BigQuote from "../modules/bigquote.js"
import BigImage from "../modules/bigimage.js"
import SetupHook from "../modules/setuphook.js"
import ShortParagraph from "../modules/shortparagraph.js"

export default class IndiaGrillArticle extends Component {
  render() {
    const { className } = this.props
    return (
      <HorizontalScroll>
        <BigImage
          src={IndiaGrill3}
          caption="Optional Caption"
          firstModule="true"
        />
        <BigQuote
          text={
            <p style={{ fontWeight: "lighter" }}>
              Sizzle sizzle,
              <br /> tikka on the grizzle.
            </p>
          }
        />
        <SetupHook
          textAlign="right"
          setup={
            // Inline textAlign attribute
            <p>
              Wedged between a pharmacy and a shoe cleaner, India’s Grill is
              slightly inconspicuous.
            </p>
          }
          hook={<p>Make no mistake, this place is worth the visit.</p>}
        />
        <BigImage
          src={IndiaGrill6}
          caption="India’s Grill is located just south of the Beverly Grove on the intersection of San Vicente and La Cienega"
        />
        <ShortParagraph
          text={
            <p>
              India’s Grill has an incredibly friendly staff, checking in on you
              without bothering you and offering to get you anything else you
              need. <br /> <br />
              <div style={{ fontWeight: "bold", textAlign: "right" }}>
                That's true service.
              </div>
            </p>
          }
        />
        <BigImage src={IndiaGrill9} />
        <ShortParagraph
          text={
            <div>
              <p style={{ width: "350px" }}>
                We’d recommend the chicken tikka—the spiced, tender outside
                reveals a softer, melt-in-your-mouth interior—paired with some
                warm garlic naan. <br /> <br />
              </p>
              <p style={{ width: "350px", marginLeft: "10vw" }}>
                And if you’re looking for richer sauces, as anyone at an Indian
                restaurant may, then try the creamy vegetable korma and saag
                paneer spread over some soft basmati rice.
              </p>
            </div>
          }
        />
        <BigImage src={IndiaGrill2} />
        <BigImage src={IndiaGrill1} />
      </HorizontalScroll>
    )
  }
}
