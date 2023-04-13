import SignUpBox from '../../Components/SignUpBox';
import './styles.css';

const Signuppage = (props) => {
  const getData = (getData) => {
    console.log(getData);
  };

  return (
    <div className="background">
      <div className="Signuppage">
        <SignUpBox getDataFromSearch={getData} />
      </div>
    </div>
  );
};

export default Signuppage;
