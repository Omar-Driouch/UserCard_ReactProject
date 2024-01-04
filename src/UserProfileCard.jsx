/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const UserProfileCard = ({user} ) => {
	const [count, setTount] = useState(false);
	 const showdetails =()=>{
		if(count){setTount(false);}
		else {setTount(true);}
	 }
	 
	
	const cardStyle = {
    width: "330px",
    padding: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    borderRadius:"15px",
    height:"100%"
  };
  const imgStyle = {
    
    width: "200px",
    height: "200px",
    
    objectFit: "cover",
    borderRadius: "50%",
  };
  const liStyle = {
    listStyle: "none",
    background: "dodgerblue",
    color: "#fff",
    padding: "5px",
    borderRadius: "5px",
    margin: "5px 0",
  };
  const btnStyle = {
    width: "100%",
    borderRadius: "25px",
    textTransform: "uppercase",
    padding: "15px",
    margin: "10px 0",
    background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    color: "#fff",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
  };
  const imagcard = {
    textAlign: "center"
  };
  return (
    <>
      <div className="card" style={cardStyle}>
        <div style={imagcard}>
          <img src={user.imageUrl} style={imgStyle} />
        </div>
        <h2>{user.name}</h2>
        <p>{user.description}</p>
        {count && (
          <div className="description">
            <h3>Age : {user.age}</h3>
            <h3>Ville : {user.location}</h3>

            <ul className="interets" style={{ display: "flex", gap: "10px" }}>
              {user.interests.map((hobie) => (
                <li style={liStyle}>{hobie}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={showdetails} id="ShowDetails" style={btnStyle}>
          Show Details
        </button>
      </div>
    </>
  );
}

export default UserProfileCard
