import React, { useState, useEffect } from 'react';
import startQuote from '../img/quote.svg';
import endQuote from '../img/end-quote.svg';

function Home() {
  const quotes = [
    "Everything's for sale, my friend! You need visit no other shops today!",
    "Everything's for sale, my friend! If I had a sister, I'd sell her in a second.",
    "I'd even buy one of your relatives, if you're looking to sell. Ha ha ha ha. That's a little joke.",
    "I can tell you're a discriminating customer. Perhaps you're a wealthy one, too, hm?",
  ];
  const [quote, setQuote] = useState(quotes[0]);
  const displayQuote = () => {
    let rand = Math.floor(Math.random() * quotes.length);
    let newQuote = quotes[rand];
    setQuote(newQuote);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      displayQuote();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Welcome to Belethor's General Goods</h1>
        </div>
      </div>
      <div className="quotes">
        <p>
          <img src={startQuote} alt="Start quote" />
          {quote}
          <img src={endQuote} alt="End quote" />
        </p>
      </div>
    </>
  );
}

export default Home;
