/* eslint-disable no-unused-vars */
import React from 'react'
import UserProfileCard from './UserProfileCard'
import Header from './Header';


const userData = [
  {
    id: 1,

    name: "Abderrahim BOUJEDAR",

    description: "Full stack .Net/React developer",

    imageUrl: "/images/img1.jpg",

    email: "abderrahimboujedar@gmail.com",

    location: "Rabat, Maroc",

    interests: ["Musique", "Voyage", "Lecture"],
  },

  {
    id: 2,

    name: "Omar DRIOUCH",

    description: "Full stack .Net/React developer",

    imageUrl: "/images/img2.png",

    email: "omardriouch29@gmail.com",

    location: "Kenitra, Maroc",

    interests: ["Technologie", "Cinéma", "Football"],
  },

  {
    id: 3,

    name: "Imane MOUHMOUH",

    description: "Full stack .Net/React developer",

    imageUrl: "/images/img3.png",

    email: "mouhmouhimane218@gmail.com",

    location: "Casablance, Maroc",

    interests: ["Programmation", "Jeux vidéo", "Voyage"],
  },

  {
    id: 4,

    name: "ABDELLAH FLAYOU",

    description: "Full stack .Net/React developer",

    imageUrl: "/images/img4.png",

    email: "flayou.abdellah05@gmail.com",

    location: "Meknes, Maroc",

    interests: ["AI", "Robotique", "Lecture"],
  },

  {
    id: 5,

    name: "Anass BOUGAMZA",

    description: "Full stack .Net/React developer",

    imageUrl: "/images/img5.png",

    email: "Bgmza.anass@gmail.com",

    location: "Casablanca, Maroc",

    interests: ["Musique", "Sports", "Technologie"],
  },
  {
    id: 6,

    name: "AMAL BENMOUSSA",

    description: "Full stack .Net/React developer",

    imageUrl: "/images/img6.png",

    email: "benmoussa17amal@gmail.com",

    location: "Casablanca, Maroc",

    interests: ["Musique", "Sports", "Technologie"],
  },
];


const App = () => {
  
const usersStyle = {display:"flex",padding:"30px",flexWrap:"wrap",gap:"25px"}
  return (
    <>
    <Header/>
      <div className="users" style={usersStyle}>
        {userData.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}


export default App
