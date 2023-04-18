import { useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import HabitCounter from "../../Components/Habit Counter";
import FreindListHome from "../../Components/Friend Box Home";
import Calendar from "../../Components/Habit Calender";
import PopUp from "../../Components/Habit PopUp";

const Habitpage = (props) => {

    const [numComponents, setNumComponents] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState(0);

    const handleSubmit = (getData) => {

      //====================================================//

      // Data obtained from popup - (Title and Max Count for counter)

      //===================================================//
      console.log(getData.title);
      console.log(getData.countPopUp);
      setTitle(getData.title)
      setNumber(getData.countPopUp)
      setShowPopup(false);
      createHabit();
    };

    const createHabit = () => {
      handleClickHabit();
    }

    const handleClickHabit = () => {
      setNumComponents(numComponents + 1);
    };

    const handleCancel = () => {
      setShowPopup(false);
    };

    const handleButtonClick = () => {
      setShowPopup(true);
    };

    const components = [];
    for (let i = 0; i < numComponents; i++) {
      components.push(<HabitCounter key={i} />);
    }

    return (
      <div className="Background">
        <div className="contents">
        {showPopup && (
          <div className="popUp-bg">
            <div className="popUp-habit">
              <PopUp
                onClose={() => setShowPopup(false)}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </div> 
          </div>
            )}
          <div className="Navbar">
            <Navbar />
          </div>
          <div className="add-btn-container">
            <button onClick={handleButtonClick} className="send-parent">
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