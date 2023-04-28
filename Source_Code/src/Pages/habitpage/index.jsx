import { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import HabitCounter from "../../Components/Habit Counter";
import FriendListHome from "../../Components/Friend Box Home";
import Calendar from "../../Components/Habit Calender";
import PopUp from "../../Components/Habit PopUp";

const Habitpage = (props) => {
  const [numComponents, setNumComponents] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [number, setNumber] = useState(localStorage.getItem("number") || 0);
  const [titleList, setTitleList] = useState(
    JSON.parse(localStorage.getItem("titleList") || "[]")
  );
  const [numberList, setNumberList] = useState(
    JSON.parse(localStorage.getItem("numberList") || "[]")
  );
  const [countList, setCountList] = useState(
    JSON.parse(localStorage.getItem("countList") || "[]")
  );
  const [lastRenderedDate, setLastRenderedDate] = useState(
    localStorage.getItem("lastRenderedDate") || new Date().toISOString().substring(0, 10)
  );

  useEffect(() => {
    const currentDate = new Date().toISOString().substring(0, 10);
    if (currentDate !== lastRenderedDate) {
      // Delete all habit data and reset component state
      localStorage.clear();
      setTitle("");
      setNumber(0);
      setTitleList([]);
      setNumberList([]);
      setCountList([]);
      setNumComponents(0);
      setLastRenderedDate(currentDate);
    } else {
      localStorage.setItem("lastRenderedDate", lastRenderedDate);
    }
  }, [lastRenderedDate]);

  const handleSubmit = (getData) => {
    console.log(getData.title);
    console.log(getData.countPopUp);
    setTitle(getData.title);
    setNumber(getData.countPopUp);
    setTitleList([...titleList, getData.title]);
    setNumberList([...numberList, getData.countPopUp]);
    setShowPopup(false);
    createHabit();
    localStorage.setItem("titleList", JSON.stringify([...titleList, getData.title]));
    localStorage.setItem("numberList", JSON.stringify([...numberList, getData.countPopUp]));
  };

  const createHabit = () => {
    handleClickHabit();
  };

  const handleClickHabit = () => {
    setNumComponents(numComponents + 1);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleDelete = (index) => {
    setTitleList(titleList.filter((_, i) => i !== index));
    setNumberList(numberList.filter((_, i) => i !== index));
    localStorage.setItem("titleList", JSON.stringify(titleList.filter((_, i) => i !== index)));
    localStorage.setItem("numberList", JSON.stringify(numberList.filter((_, i) => i !== index)));
    localStorage.setItem("countList", JSON.stringify(countList.filter((_, i) => i !== index)));
  };

  const handleCountChange = (newCount, index) => {
    const newCountList = [...countList];
    newCountList[index] = newCount;
    setCountList(newCountList);
    localStorage.setItem("countList", JSON.stringify(newCountList));
  };
  

  const habitCounters = titleList.map((title, i) => (
    <HabitCounter
      key={`${title}-${numberList[i]}-${i}`}
      habitTitle={title}
      maxCount={numberList[i]}
      index={i}
      onDelete={handleDelete}
      onCountChange={(newCount) => handleCountChange(newCount, i)}
    />
  ));

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
          <button onClick={handleButtonClick} className="add-habit-btn">
            <div className="add-habit">+ Add a Habit</div>
          </button>
        </div>
        <div className="habit-tracker">
          <p className="title-habit">Habit Tracker</p>
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

          <div className="calender">
            <Calendar />
          </div>
          <div className="habit-counter">{habitCounters}</div>
        </div>
        <div className="tools-habit">
          <FriendListHome/>
        </div>
      </div>
    </div>
  );
};



export default Habitpage;
