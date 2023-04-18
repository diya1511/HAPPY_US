import './styles.css';
import Navbar from '../../Components/Navbar';
import HabitCounter from '../../Components/Habit Counter';
import FriendListHome from '../../Components/Friend Box Home';
import HabitCalendar from '../../Components/Habit Calender';
const Habitpage = () => {
  return (
    <div className="Background">
      <div className="contents">
        <Navbar />
        <div className="habit-tracker">
          <HabitCalendar />
          <div className="habit-counter">
            <HabitCounter />
            <HabitCounter />
            <HabitCounter />
            <HabitCounter />
            <HabitCounter />
          </div>
        </div>
        <FriendListHome />
      </div>
    </div>
  );
};

export default Habitpage;
