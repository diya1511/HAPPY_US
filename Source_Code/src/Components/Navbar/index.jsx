import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import './styles.css';
import { toast } from 'react-hot-toast';

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  };
  return (
    <div className="sidebar clip-contents">
      <div className="frame-69">
        <div className="frame-68">
          <div className="frame-67">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9818?alt=media&token=05508e82-6995-4c04-8e72-11770f7ddafd"
              alt="Not Found"
              className="group-27"
            />
            <p className="happy-us">Happy Us</p>
          </div>
        </div>
        <div className="frame-66">
          <div className="frame-2">
            <div className="frame-20">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9828?alt=media&token=48a3b291-67e3-4dc4-ae35-f612b1b75f0d"
                alt="Not Found"
                className="search"
              />
              <input
                type="text"
                placeholder="Search"
                className="input-search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-71">
        <div className="frame-13">
          <NavLink className="frame-12" to="/">
            <img src="/home-icon.svg" alt="Not Found" className="home" />
            <p className="home-1">Home</p>
          </NavLink>
          <NavLink className="frame-12" to="/habit">
            <img
              src="/habit-icon.svg"
              alt="Not Found"
              className="calendar-nav"
            />
            <p className="habit-tracker-nav">Habit Tracker</p>
          </NavLink>
          <NavLink className="frame-12" to="/events">
            <img src="/event-icon.svg" alt="Not Found" className="home-2" />
            <p className="event">Events</p>
          </NavLink>

          {/* Navbar Events */}

          {/* Navbar Meditation */}

          <NavLink className="frame-12" to="/meditation">
            <img src="/self-help-icon.svg" alt="Not Found" className="home-3" />
            <p className="meditation">Meditation</p>
          </NavLink>
          <NavLink className="frame-12" to="/quotes">
            <img src="quotes-icon.svg" alt="Not Found" className="bar-chart" />
            <p className="quotes">Quotes</p>
          </NavLink>
          {!auth.user ? (
            <>
              <NavLink className="frame-12" to="/signup">
                <img src="/register-icon.svg" alt="Not Found" />
                <p className="register">Register</p>
              </NavLink>
              <NavLink className="frame-12" to="/login">
                <img src="/login-icon.svg" alt="Not Found" />
                <p className="login">Login</p>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="frame-12" onClick={handleLogOut} to="/login">
                <img src="/logout.svg" alt="Not Found" className='logout-icon'/>
                <p className="logout-txt">Logout</p>
              </NavLink>
              
            </>
          )}
        </div>
        <div className="frame-62">
                <div className="group-25">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9864?alt=media&token=e2629814-ae5a-4861-b6ab-7f7d26185a06"
                    alt="Not Found"
                    className="ellipse-5"
                  />
                  <p className="om-prakash-nav" to="/">
                    Om Prakash
                  </p>
                </div>
              </div>
      </div>
    </div>
  );
}
