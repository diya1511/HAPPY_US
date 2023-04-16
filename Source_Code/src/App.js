import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loginpage from './Pages/loginpage/index';
import SignUpBox from './Components/SignUpBox/index';
import Homepage from './Pages/homepage/index';
import Habitpage from './Pages/habitpage/index';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/habit" element={<Habitpage />} />
        <Route path="/signup" element={<SignUpBox />} />
      </Routes>
    </div>
  );
}

export default App;
