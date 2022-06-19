import React from 'react';
import ManifestDirectory from '../manifest/manifestDirectory';
import ManifestShare from '../manifest/manifestShare';
import SubMenu from '../menu/subMenu'
// import './content.css'

export default function Content() {

  const myUserInfo = {
    name: 'Datta Velivela',
    photo: 'https://placekitten.com/80/81',
    id: 22332

}

  return (
    <div className='content-main w-4/5 flex'>

      <div className='content-space w-5/6 p-6'>
        <h1 className='mb-6 text-left text-3xl font-extrabold p-1'>Welcome {myUserInfo.name}</h1>
        <ManifestShare />
        <ManifestDirectory />
      </div>

      <div className='right-menu w-1/6'>
        <SubMenu />
      </div>


    </div>
  )
}
