import React from 'react'
import User from '../ux-elements/user'


export default function manifestShare() {
  return (
    <div>
      <h3>Share your Manifestation</h3>
      <input></input>
      <User />
      <button>
      <span class="material-symbols-outlined">
        send
      </span>
        Publish
      </button>

    </div>
  )
}
