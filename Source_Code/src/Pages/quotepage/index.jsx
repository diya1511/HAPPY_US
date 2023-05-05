import { useState, useEffect } from "react";
import "./styles.css";
import QuoteBox from "../../Components/Quote Box";
import Navbar from "../../Components/Navbar";

const QuotePage = (props) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const dailyQuotes = data.slice(0, 11);
      setQuotes(dailyQuotes);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="quote-container">
          <p className="title-habit">Quotes</p>
          <div className="line-container">
            <svg className="line-svg">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#eee"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="quote-list">
            {quotes.map((quote) => (
              <QuoteBox
                key={quote.id}
                Quote={quote.text}
                Author={quote.author || "Unknown"}
                Occupation={quote.source || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
