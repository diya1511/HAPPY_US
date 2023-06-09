import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state';
import axios from 'axios';
import './styles.css';
import { useAuth } from '../../Context/auth';
import Navbar from '../Navbar';
export default function LoginBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        dispatch(
          setLogin({
            user: res.data.user,
            token: res.data.token,
          })
        );
        localStorage.setItem('auth', JSON.stringify(res.data));
        window.localStorage.setItem('isLoggedIn', true);
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="background">
          <div className="LoginPage">
            <div className="frame-60">
              <div className="form">
                <div className="section-headings">
                  <div className="box">
                    <div className="title-and-contents">
                      <p className="sign-up-to">Login to Happy Us</p>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4477?alt=media&token=62378672-37ec-46a2-a137-faae8c812a43"
                      alt="Not Found"
                      className="spacer-horizontal"
                    />
                  </div>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4481?alt=media&token=a77a5f02-e0a8-4a10-9380-a6d7f1aa6972"
                  alt="Not Found"
                  className="spacer-vertical"
                />
                <div className="forms-registration-email-password">
                  <form>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4484?alt=media&token=bf6e43d3-f6e4-431a-8bd1-4cfbacc30822"
                      alt="Not Found"
                      className="spacer-vertical-1"
                    />

                    {/* Email Input */}

                    <div className="text-field-outlined">
                      <div className="input">
                        <div className="label-container">
                          <p className="label">Email address</p>
                        </div>
                        <input
                          className="content clip-contents"
                          placeholder="Enter your email"
                          autoComplete="username"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    {/* Email Input */}

                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4484?alt=media&token=bf6e43d3-f6e4-431a-8bd1-4cfbacc30822"
                      alt="Not Found"
                      className="spacer-vertical-1"
                    />

                    {/* Password Input */}

                    <div className="text-field-outlined-1">
                      <div className="input-1">
                        <div className="label-container-1">
                          <p className="label-2">Password</p>
                        </div>
                        <input
                          className="content clip-contents"
                          placeholder="Enter your password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="new-password"
                          value={password}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                        <button
                          type="button"
                          onClick={handleShowPassword}
                          className="show-pass-btn"
                        >
                          {showPassword ? (
                            <img src="/hide-pass-icon.svg" alt="Not Found" />
                          ) : (
                            <img src="/show-pass-icon.svg" alt="Not Found" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Password Input */}

                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4484?alt=media&token=bf6e43d3-f6e4-431a-8bd1-4cfbacc30822"
                      alt="Not Found"
                      className="spacer-vertical-1"
                    />

                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4486?alt=media&token=0fcc55d5-7660-4b27-9f1a-3f403e9be388"
                      alt="Not Found"
                      className="spacer-vertical-2"
                    />
                    {/* 
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4490?alt=media&token=60b48f9e-91e0-497f-8ee7-a2903f03a614"
                  alt="Not Found"
                  className="spacer-vertical-3"
                /> */}
                  </form>
                  <div className="button-contained clip-contents">
                    <button
                      onClick={handleSubmit}
                      className="base clip-contents"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <div className="frame-53">
                <p className="or">or</p>
              </div>
              <p className="already-have-an-account">
                Aren't registered?{' '}
                <Link className="span" to="/signup">
                  Sign Up
                </Link>{' '}
                to our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
