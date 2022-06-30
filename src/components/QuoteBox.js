/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

export default function QuoteBox({quotes}){

    const [randomQuote, setRandomQuote] = useState({});
    const [tweetURL, setTweetURL] = useState("");
    const [tumblrURL, setTumblrURL] = useState("");

    useEffect(() => {
        getRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

     const getRandomQuote =() => {
         let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

         setRandomQuote({
             currentQuote: randomQuote.quote,
             currentAuthor: randomQuote.author
         });

         setTweetURL(
             'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
             encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author));
         
         setTumblrURL(
             'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
             encodeURIComponent(randomQuote.author) + '&content=' + encodeURIComponent(randomQuote.quote) +
             '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
         
         changeColorTheme();
    }

    const changeColorTheme = () => {

        var colors = [
            '#36827F',
            '#f9db6d',
            '#877666',
            '#464D77',
            '#9D5C63',
            '#E4BB97',
            '#584B53',
            '#FFB8D1',
            '#E9AFA3',
            '#8FA998',
            '#999AC6',
            '#798071',
            '#243E36'
        ];

    var color = Math.floor(Math.random() * colors.length);      
        $('#text, #author').css('color', colors[color]);
        $('.icon, #new-quote, #root').css('background-color', colors[color])
}
    
    return(
        <div id="quote-box" className="col-lg-5">
                <div className="quote-text col-12">
                <blockquote id="text">
                    <FontAwesomeIcon icon={faQuoteLeft} /> {randomQuote.currentQuote} </blockquote>
                </div>
            
            <div className="quote-author align-self-end">
                <span id="author" >- {randomQuote.currentAuthor}</span>
            </div>

            <div className="button-container">

                <a className="button" id="tweet-quote" title="Tweet this quote!" href={tweetURL} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>

                <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" href={tumblrURL} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTumblr} className="icon"/>
                </a>

                <button className="btn" id="new-quote" onClick={() => getRandomQuote()}>New quote</button>
                </div>
        </div>
        )
    }
    
  

