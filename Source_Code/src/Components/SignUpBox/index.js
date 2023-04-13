import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SignUpBox(props) {
  const [NameValue, setNameValue] = useState('');
  const [EmailValue, setEmailValue] = useState('');
  const [PassValue, setPassValue] = useState('');
  const [ConfirmPassValue, setConfirmPassValue] = useState('');

  const { getDataFromSearch } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    getDataFromSearch({ NameValue, EmailValue, PassValue, ConfirmPassValue });
  };

  const handleInputNameValue = (event) => {
    const { value } = event.target;
    setNameValue(value);
  };

  const handleInputEmailValue = (event) => {
    const { value } = event.target;
    setEmailValue(value);
  };

  const handleInputPassValue = (event) => {
    const { value } = event.target;
    setPassValue(value);
  };

  const handleInputConfirmPassValue = (event) => {
    const { value } = event.target;
    //Set the updated value
    setConfirmPassValue(value);
    //console.log(value)
  };

  return (
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
                  className="content clip-contents"
                  placeholder="Enter your name"
                  onChange={handleInputNameValue}
                  value={NameValue}
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
                  className="content clip-contents"
                  placeholder="Enter your email"
                  autoComplete="username"
                  onChange={handleInputEmailValue}
                  value={EmailValue}
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
                  type={'password'}
                  autoComplete="new-password"
                  onChange={handleInputPassValue}
                  value={PassValue}
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
                  <p className="label-2">Confirm Password</p>
                </div>
                <input
                  className="content clip-contents"
                  placeholder="Confirm your password"
                  type={'password'}
                  autoComplete="new-password"
                  onChange={handleInputConfirmPassValue}
                  value={ConfirmPassValue}
                />
              </div>
            </div>

            {/* Confirm Password Input */}

            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/68va6dmrmrr-119%3A4486?alt=media&token=0fcc55d5-7660-4b27-9f1a-3f403e9be388"
              alt="Not Found"
              className="spacer-vertical-2"
            />

            <div className="button-contained clip-contents">
              <button onClick={handleSubmit} className="base clip-contents">
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
  );
}
