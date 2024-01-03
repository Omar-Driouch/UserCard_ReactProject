/* eslint-disable no-unused-vars */
import React from 'react'
import UserProfileCard from './UserProfileCard'

const userData = [ 

  { 

    id: 1, 

    name: "Ali Dahmani", 

    description: "Full stack .Net/React developer", 

    imageUrl: "/images/ali.jpg", 

    age: "28 ans", 

    mobilite: "national", 

    disponibilité: "immédiate", 

    location: "Rabat, Maroc", 

    interests: ["Musique", "Voyage", "Lecture"] 

  }, 

  { 

    id: 2, 

    name: "Lina Al-Farsi", 

    description: "Mobile developer", 

    imageUrl: "/images/lina.jpg", 

    age: "32 ans", 

    mobilite: "international", 

    disponibilité: "1 mois", 

    location: "Dubaï, Émirats Arabes Unis", 

    interests: ["Technologie", "Cinéma", "Yoga"] 

  }, 

  { 

    id: 3, 

    name: "Youssef Amrani", 

    description: "Data scientist", 

    imageUrl: "/images/youssef.jpg", 

    age: "30 ans", 

    mobilite: "national", 

    disponibilité: "immédiate", 

    location: "Casablance, Maroc", 

    interests: ["Programmation", "Jeux vidéo", "Voyage"] 

  }, 

  { 

    id: 4, 

    name: "Sara Khoury", 

    description: "Full stack .Net/React developer", 

    imageUrl: "/images/sara.jpg", 

    age: "26 ans", 

    mobilite: "international", 

    disponibilité: "3 mois", 

    location: "Meknes, Maroc", 

    interests: ["AI", "Robotique", "Lecture"] 

  }, 

  { 

    id: 5, 

    name: "Amal Salim", 

    description: "Full stack JEE/Angular developer", 

    imageUrl: "/images/amir.jpg", 

    age: "35 ans", 

    mobilite: "national", 

    disponibilité: "immédiate", 

    location: "Casablanca, Maroc", 

    interests: ["Musique", "Sports", "Technologie"] 

  } 
]
const App = () => {
  return (
    <div>
      {userData.map((user)=>(
        <UserProfileCard key={user.id} user={user}/>
      ))}
      
    </div>
  )
}


export default App
