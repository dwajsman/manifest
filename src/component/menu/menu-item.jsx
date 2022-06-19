import React from 'react'

export default function menuItem({item}) {



  return (

    <div className='flex py-2 justify-end' onClick={item.link}>
      <div className='flex self-left border-2 w-full'>
        <div className='w-1/3'></div>

          <img src={item.icon} alt="" className='pr-2' />
          <p> {item.name}</p>

      </div>
    </div>
  )
}
