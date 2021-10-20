import PropTypes from "prop-types"

const customStyle = {
    fontFamily: "Sacramento, cursive",
    fontSize: "5.625rem",
    color: "#66BFBF",
    textAlign: "center"
  }

const bioAndprofession = {
    color: "black",
    lineHeight: "1.7",
    fontSize: "1.4rem",
    fontWeight: "normal",
    textAlign: "center"
}

const position = {
    width : "50%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}



const Profile = (props) => <div style={position}>
    {props.handleName(props.fullName)}
    {props.children}
    <h1 style={customStyle}>{props.fullName}</h1>
    <h2 style={bioAndprofession}>{props.bio}</h2>
    <h3 style={bioAndprofession}>{props.profession}</h3>
    
    
</div>

Profile.defaultProps = {
    fullName : "Your Name Here",
    bio : "Your Bio Here",
    profession : "Your Profession Here"
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func
}

export default Profile;