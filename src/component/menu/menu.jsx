import React from 'react'
// import './menu.css';
import Logo from '../../img/manifest.svg'

import Home from '../../img/Home.svg'
import Community from '../../img/UserGroup.svg'
import Activity from '../../img/Bookmark.svg'
import Events from '../../img/Calendar.svg'

import MenuItem from './menu-item'


export default function Menu() {

  const buttons = [
    {
      name: 'Home',
      link: '#',
      icon: `${Home}`,
      focus: false,
    },
    {
      name: 'Community',
      link: '#',
      icon: `${Community}`,
      focus: false,
    },
    {
      name: 'Activity',
      link: '#',
      icon: `${Activity}`,
      focus: false,
    },
    {
      name: 'Events',
      link: '#',
      icon: `${Events}`,
      focus: false,
    },

  ]
  return (
    <div className='menubar w-1/5 p-6 border-2'>

      <img src={Logo} alt="Manifest Logo" />

      
      <div className='flex flex-col py-20 border-2 justify-end'>

        {buttons.map((b) => {
          return (
            <MenuItem item={b} key={b.name}/>
            )
          })}
      </div>
      



    </div>
  )
}
