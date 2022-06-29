import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faTumblrSquare } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteBox({quotes}){

    const [randomQuote, setRandomQuote] = useState({});

    useEffect(() => {
        getRandomQuote();
    }, []);


    function getRandomQuote() {

        let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
        setRandomQuote({
            currentQuote: randomQuote.quote,
            currentAuthor: randomQuote.author
        })
    
    }

    return(
        <div id="quote-box" >
                <div className="quote-text">
                    <span id="text"><FontAwesomeIcon icon={faQuoteLeft} />{randomQuote.currentQuote}</span>
                   
            </div>
            <div className="quote-author">-
                    <span id="author">{randomQuote.currentAuthor}</span></div>
            <div className="buttons">
                <a className="btn" id="tweet-quote" title="Tweet this quote!" href="">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a className="btn" id="tumblr-quote" title="Post this quote on tumblr!" href="">
                    <FontAwesomeIcon icon={faTumblrSquare} />
                </a>
                <button className="btn" id="new-quote" onClick={() => getRandomQuote()}>New quote</button>
                </div>
          
            </div>
            
        )
    }
    
  

