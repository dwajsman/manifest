import React from 'react'
import User from '../ux-elements/user'


export default function manifestShare() {

  const myUserInfo = {
        name: 'Datta Velivela',
        photo: 'https://placekitten.com/80/81',
        id: 22332
    
  }

  return (
    <div>
      <h3>Share your Manifestation</h3>
      <input></input>
      <User user={myUserInfo}/>
      <button>
      <span className="material-symbols-outlined">
        > 
      </span>
        Publish
      </button>

    </div>
  )
}
