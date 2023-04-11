import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loginpage from './Pages/signuppage';
import Signuppage from './Pages/signuppage';
import Homepage from './Pages/homepage/index';
// import RegistrationForm from './Components/1';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        {/* <Route path="/about" element={<About />} />  */}
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
