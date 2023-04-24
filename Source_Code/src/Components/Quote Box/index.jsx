import { useState } from "react";
import "./styles.css";

const QuoteBox = (props) => {

  return (
    <div className="youre-braver-than-you-believe-parent">
      <div className="youre-braver-than-container">
        <span className="youre-braver-than-you-believe">
            <b>"</b>
          <span className="youre-braver-than">
            {props.Quote}
          </span>
            <b>"</b>
        </span>
      </div>
      <div className="aa-mine-parent">
        <div className="aa-mine">{props.Author}</div>
        <div className="authorpoet"><span>-</span>{props.Occupation}</div>
      </div>
    </div>
  );
};

export default QuoteBox;
