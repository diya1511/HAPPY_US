import { useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import HabitCounter from "../../Components/Habit Counter";
import FreindListHome from "../../Components/Friend Box Home";
import Calendar from "../../Components/Habit Calender";

const Habitpage = (props) => {

    const [numComponents, setNumComponents] = useState(0);

    const handleClick = () => {
      setNumComponents(numComponents + 1);
    };
  
    const components = [];
    for (let i = 0; i < numComponents; i++) {
      components.push(<HabitCounter key={i} />);
    }

    return (
      <div className="Background">
        <div className="contents">
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="add-btn-container">
            <button onClick={handleClick} className="send-parent">
                <div className="send">
                    + Add a Habit
                </div>
            </button>
          </div>
          <div className="habit-tracker">
            <p className="title-habit">Habit Tracker</p>
            <div class="line-container">
              <svg class="line-svg">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="#eee"
                  stroke-width="1"
                />
              </svg>
            </div>

            <div className="calender">
              <Calendar />
            </div>
            <div className="habit-counter">
                {components}
            </div>
          </div>
          <div className="tools-habit">
            <FreindListHome />
          </div>
        </div>
      </div>
    );
}

export default Habitpage;