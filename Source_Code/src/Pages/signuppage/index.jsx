// import Frame60 from '../../Components/Login Box';
import SignUpBox from '../../Components/SignUpBox';
import './styles.css';

const Signuppage = (props) => {
  const getDataFromSearch = (getData) => {
    console.log(getData);
  };

  return (
    <div className="background">
      <div className="Signuppage">
        <SignUpBox getDataFromSearch={getDataFromSearch} />
      </div>
    </div>
  );
};

export default Signuppage;
