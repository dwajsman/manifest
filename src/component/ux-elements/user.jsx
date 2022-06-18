import React from 'react'

export default function user({user}) {

  // const user = {
  //   name: 'Datta Velivela',
  //   photo: 'https://placekitten.com/80/80',
  //   id: 22332
  // }


  return (
    <div key={user.id}>
      
      <img src={user.photo} alt={`photo of ${user.name}`} />
      <p>{user.name}</p>
      

    </div>
  )
}
