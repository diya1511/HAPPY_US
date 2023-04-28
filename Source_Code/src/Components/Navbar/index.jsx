import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import './styles.css';

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('token');
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9837?alt=media&token=a38abc79-b19d-4f66-954b-7f2b75423f17"
              alt="Not Found"
              className="home"
            />
            <p className="home-1">Home</p>
          </NavLink>
          <NavLink className="frame-12" to="/habit">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9840?alt=media&token=d0868572-0281-4d70-813b-799e9fdf57ab"
              alt="Not Found"
              className="calendar-nav"
            />
            <p className="habit-tracker-nav">Habit Tracker</p>
          </NavLink>
          <NavLink className="frame-12" to="/events">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9849?alt=media&token=ea049662-a8df-48ed-a55c-4244c8aadc05"
              alt="Not Found"
              className="home-2"
            />
            <p className="event">Events</p>
          </NavLink>

          {/* Navbar Events */}

          {/* Navbar Meditation */}

          <NavLink className="frame-12" to="/meditation">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9854?alt=media&token=389c4fa2-6212-40c5-a265-2c748bf71b7c"
              alt="Not Found"
              className="home-3"
            />
            <p className="meditation">Meditation</p>
          </NavLink>
          <NavLink className="frame-12" to="/quotes">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/iwa6lwcn95-226%3A9857?alt=media&token=4417c364-71b0-451c-ac8d-22f6ef60773c"
              alt="Not Found"
              className="bar-chart"
            />
            <p className="quotes">Quotes</p>
          </NavLink>
          {!auth.user ? (
            <>
              <NavLink className="frame-12" to="/signup">
                <img src="/register.png" alt="Not Found" className="home-3" />
                <p className="register">Register</p>
              </NavLink>
              <NavLink className="frame-12" to="/login">
                <img src="/user.png" alt="Not Found" className="home-3" />
                <p className="login">Login</p>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="frame-12" onClick={handleLogOut} to="/login">
                <img src="/power-off.png" alt="Not Found" className="home-3" />
                <p className="logout">Logout</p>
              </NavLink>
            </>
          )}
        </div>
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
  );
}
