import { useState } from "react";
import "./styles.css";
import QuoteBox from "../../Components/Quote Box";
import Navbar from "../../Components/Navbar";
import FreindListHome from "../../Components/Friend Box Home";

const Quotepage = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

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
            <QuoteBox
              Quote={"You’re braver than you believe, and stronger than you seem, and smarter than you think."}
              Author={"A.A. Mine"}
              Occupation={"Author/Poet"}
            />
            <QuoteBox
              Quote={"Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you"}
              Author={"Mary Lou Retton"}
              Occupation={"Gymnast"}
            />
            <QuoteBox
              Quote={"Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is the same"}
              Author={"Francesca Reigler"}
              Occupation={"Artist"}
            />
            <QuoteBox
              Quote={"It’s not whether you get knocked down, it’s whether you get up"}
              Author={"Vince Lombardi"}
              Occupation={"Football player"}
            />
            <QuoteBox
              Quote={"The happiness of your life depends upon the quality of your thoughts."}
              Author={"Marcus Aurelius"}
              Occupation={"Roman Emporer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotepage;
