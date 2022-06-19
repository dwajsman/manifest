import React from 'react';
import ManifestDirectory from '../manifest/manifestDirectory';
import ManifestShare from '../manifest/manifestShare';
import SubMenu from '../menu/subMenu'
// import './content.css'

export default function content() {
  return (
    <div className='content-main w-4/5 flex'>

      <div className='content-space w-5/6'>
        <h1 className='mb-6 text-left text-3xl font-extrabold p-1'>content</h1>
        <ManifestShare />
        <ManifestDirectory />
      </div>

      <div className='right-menu w-1/6'>
        <SubMenu />
      </div>


    </div>
  )
}
