import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loginpage from './Components/Login Box/index';
import SignUpBox from './Components/SignUpBox/index';
import Homepage from './Pages/homepage/index';
import Habitpage from './Pages/habitpage';
import Eventpage from './Pages/eventpage/index';
import Meditationpage from './Pages/meditation/App';
// import EventDetails from './Pages/events/components/EventDetail';
import Medinital from './Pages/meditation/components/Meditation';
import MedDetail from './Pages/meditation/components/MeditationDetail';
import QuotePage from './Pages/quotepage/index';
import { Toaster } from 'react-hot-toast';
import EventListPage from './Pages/eventpage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/habit" element={<Habitpage />} />
        <Route path="/signup" element={<SignUpBox />} />
        <Route path="/events" element={<EventListPage/>} />
        <Route path="/meditation" element={<Meditationpage />} />
        <Route path="/meditationstart" element={<Medinital />} />
        <Route path="/medDetail" element={<MedDetail />} />
        {/* <Route path="/eventdetails" element={<EventDetails />} /> */}
        <Route path="/quotes" element={<QuotePage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
