import React from 'react'
import User from '../ux-elements/user';

export default function manifestItem({manifest}) {

  return (
    <div>
      <p>{manifest.manifest}</p>
      <User user={manifest.user}/>
    </div>
  )
}
