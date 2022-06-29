import './App.css';
import QuoteBox from './components/QuoteBox';
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    fetchQuotes();
   }, []);
  
  function fetchQuotes(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(
        (result) => {
          setQuotes(result.quotes);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setQuotes([]);
          })
        }
      

  return (
    <div className="container centered">
      {isLoading ? <LoadingSpinner />
      : quotes.length !== 0 ? <QuoteBox quotes={quotes} /> : <ErrorMessage/>}
     
    </div>
  );
}

export default App;
