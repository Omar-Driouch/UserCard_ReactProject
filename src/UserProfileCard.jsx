/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'

const UserProfileCard = ({user} ) => {
	const showdetails = false;
	
	const cardStyle = {
    width: "330px",
    padding: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  };
  const imgStyle = {
    width: "300px",
    height: "300px",
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
    background: "tomato",
    color: "#fff",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
  };
  return (
    <>
      <div className="card" style={cardStyle}>
        <img src={user.imageUrl} style={imgStyle}/>
        <h2>{user.name}</h2>
        <p>{user.description}</p>
        {showdetails && (
          <div className="description" hidde>
            <h3>Age : {user.age}</h3>
            <h3>Ville : {user.location}</h3>

            <ul className='interets' style={{display:'flex',gap:'10px'}}>
              {user.interests.map((hobie) => (
                <li style={liStyle}>{hobie}</li>
              ))}
            </ul>
          </div>
        )}
        <button id="ShowDetails" style={btnStyle}>
          Show Details
        </button>
      </div>
    </>
  );
}

export default UserProfileCard
