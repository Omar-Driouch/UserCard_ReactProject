/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'

const UserProfileCard = ({user} ) => {
  return (
    <>
      <div className="card">
        <img src={user.imageUrl} />
        <h2>{user.name}</h2>
        <p>{user.description}</p>
        <div className="description" hidde>
          <h3>Age : {user.age}</h3>
          <h3>Ville : {user.location}</h3>

          <ul>
            {user.interests.map((hobie) => (
              <li>{hobie}</li>
            ))}
          </ul>
        </div>
        <button id="ShowDetails">Afficher</button>
      </div>
    </>
  );
}

export default UserProfileCard
