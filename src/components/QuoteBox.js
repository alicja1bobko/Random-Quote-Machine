import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faTumblrSquare } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default class QuoteBox extends Component {

  render() {
    return (
        <div id="quote-box" >
          
            <div className="quote-text">
                <span id="text"><FontAwesomeIcon icon={faQuoteLeft} />I didn't fail the test. I just found 100 ways to do it wrong</span>
            </div>
            <div className="quote-author">-
                <span id="author">Benjamin Franklin</span></div>
            <div className="buttons">
                <a className="btn" id="tweet-quote" title="Tweet this quote!" href="">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a className="btn" id="tumblr-quote" title="Post this quote on tumblr!" href="">
                    <FontAwesomeIcon icon={faTumblrSquare} />
                </a>
                <button className="btn" id="new-quote">New quote</button>
                </div>
         
      </div>
    )
  }
}
