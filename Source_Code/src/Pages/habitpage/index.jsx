import './styles.css';
import Navbar from '../../Components/Navbar';
import HabitCounter from '../../Components/Habit Counter';
import FriendListHome from '../../Components/Friend Box Home';

const Habitpage = () => {
  return (
    <div className="Background">
      <div className="contents">
        <Navbar />
        <div className="habit-tracker">
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
