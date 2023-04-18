import React from 'react';
import './styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    // const currentMonth = months[currentDate.getMonth()];
    // const currentYear = currentDate.getFullYear();

    // create an array of dates for the current week
    const dates = [];
    const todayIndex = currentDate.getDay();
    const daysBeforeToday = todayIndex;
    const daysAfterToday = 6 - todayIndex;

    for (let i = daysBeforeToday; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      dates.push(date);
    }

    for (let i = 1; i <= daysAfterToday; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }

    return (
      <div className="calendar">
        <div className="weekdays">
          {weekDays.map((day) => (
            <div className="weekday" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="dates">
          {dates.map((date) => (
            <div
              key={date}
              className={`date-card ${
                date.getDate() === currentDate.getDate() ? 'today' : ''
              }`}
            >
              <div className="day">{date.getDate()}</div>
              <div className="month">{months[date.getMonth()]}</div>
              <div className="year">{date.getFullYear()}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
