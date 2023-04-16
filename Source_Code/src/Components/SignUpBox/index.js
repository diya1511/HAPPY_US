import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function SignUpBox(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const { getDataFromSearch } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('api/v1/auth/signup', {
        name,
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="background">
      <div className="Signuppage">
        <div className="frame-60">
          <div className="form">
            <div className="section-headings">
              <div className="box">
                <div className="title-and-contents">
                  <p className="sign-up-to">Sign Up to Happy Us</p>
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
                {/* Name Input */}
                <div className="text-field-outlined">
                  <div className="input">
                    <div className="label-container">
                      <p className="label">Name</p>
                    </div>
                    <input
                      type="text"
                      className="content clip-contents"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4484?alt=media&token=bf6e43d3-f6e4-431a-8bd1-4cfbacc30822"
                  alt="Not Found"
                  className="spacer-vertical-1"
                />
                <div className="text-field-outlined">
                  <div className="input">
                    <div className="label-container">
                      <p className="label">Email address</p>
                    </div>
                    <input
                      type="email"
                      className="content clip-contents"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4484?alt=media&token=bf6e43d3-f6e4-431a-8bd1-4cfbacc30822"
                  alt="Not Found"
                  className="spacer-vertical-1"
                />
                <div className="text-field-outlined-1">
                  <div className="input-1">
                    <div className="label-container-1">
                      <p className="label-2">Password</p>
                    </div>
                    <input
                      className="content clip-contents"
                      placeholder="Enter your password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4484?alt=media&token=bf6e43d3-f6e4-431a-8bd1-4cfbacc30822"
                  alt="Not Found"
                  className="spacer-vertical-1"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4486?alt=media&token=0fcc55d5-7660-4b27-9f1a-3f403e9be388"
                  alt="Not Found"
                  className="spacer-vertical-2"
                />{' '}
                <div className="button-contained clip-contents">
                  <button className="base clip-contents" onClick={handleSubmit}>
                    Sign Up
                  </button>
                </div>
                {/* Submit Button */}
              </form>
            </div>
          </div>
          <div className="frame-53">
            <p className="or">or</p>
          </div>
          <p className="already-have-an-account">
            Already have an account?{' '}
            <Link className="span" to="/login">
              Log In
            </Link>{' '}
            to continue.
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
