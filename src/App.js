
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import PropTypes from 'prop-types';
const styleObject = {
  
  color: "violet",
  textAlign: "center",
  fontSize: "150%",

};

function App() {
  let name='Amira'
  let age =25
  let job='student'
  let  handleName=()=>{
    alert("hello")
  };

  return (
    <div style={styleObject}>
      <ProfileComponent FullName= {name} bio={age} profession={job}  handleName={ handleName} />

    </div>
  );
}
ProfileComponent.defaultProps = {
  FullName: "unknown",
  image:
    "https://cdn1.vectorstock.com/i/thumb-large/45/70/female-avatar-profile-picture-silhouette-light-vector-4684570.jpg",
};



ProfileComponent.PropTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.number,
  profession: PropTypes.string,
  image: PropTypes.string,
}

export default App;
