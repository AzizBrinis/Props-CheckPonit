import Profile from "./profile/Profile";

const handleName = (userName) => {
  alert(`Hello ${userName} !`)
}

const positionDiv = {
  display: "flex",
  justifyContent: "center"
}

const imgStyle = {
  width: "50%",
  margin: "100px"
}

function App() {
  return (
    <div style={positionDiv}>
      <Profile 
        fullName="Mohamed Aziz Brinis"
        bio="Founder and CEO of Techno Smart and Ledonia I've studied in Korba prep school and I have got my diplome in 2020, also I love programming"
        profession="Entrepreneur & Web Devoloper"
        handleName = {handleName}
      ><img src="./aziz.png" alt="aziz" style={imgStyle} /></Profile>
    </div>
  );
}

export default App;
