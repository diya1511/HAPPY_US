// import { useState } from "react";
import './styles.css';
import LoginBox from '../../Components/Login Box';

const LoginPage = (props) => {
  const getDataFromSearch = (getData) => {
    console.log(getData);
  };

  return (
    <div className="background">
      <div className="LoginPage">
        <LoginBox getDataFromSearch={getDataFromSearch} />
      </div>
    </div>
  );
};

export default LoginPage;
