import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Loginpage from './Components/Login Box/index';
import SignUpBox from './Components/SignUpBox/index';
import Homepage from './Pages/homepage/index';
import { useDispatch } from 'react-redux';
import { setLogin, setFriends } from '../src/state/index.js';
import { useAuth } from '../src/Context/auth.js';
import Habitpage from './Pages/habitpage';
import Meditationpage from './Pages/meditation/App';
import Medinital from './Pages/meditation/components/Meditation';
import MedDetail from './Pages/meditation/components/MeditationDetail';
import QuotePage from './Pages/quotepage/index';
import { Toaster } from 'react-hot-toast';
import EventListPage from './Pages/eventpage';
import ExercisePage from './Pages/meditation/components/Exercise.js';
import PrivateRoute from './Components/Routes/Private';
import ExerciseDetail from './Pages/meditation/components/ExerciseDetail';

function App() {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  const dispatch = useDispatch();
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData) {
      dispatch(
        setLogin({
          user: authData.user,
          token: authData.token,
        }),
        setFriends({ friends: authData.user.friends })
      );
    }
  }, [setAuth]);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Homepage /> : <Loginpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route
          path="/habit"
          element={
            <PrivateRoute>
              {' '}
              <Habitpage />{' '}
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUpBox />} />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              {' '}
              <EventListPage />{' '}
            </PrivateRoute>
          }
          // element={<EventListPage/>}
        />
        <Route path="/meditation" element={<Meditationpage />} />
        <Route path="/meditationstart" element={<Medinital />} />
        <Route path="/medDetail" element={<MedDetail />} />
        <Route path="/exeDetail" element={<ExerciseDetail/>} />
        <Route path="/exercisestart" element={<ExercisePage />} />
        <Route path="/quotes" element={<QuotePage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
