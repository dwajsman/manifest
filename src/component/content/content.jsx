import React from 'react';
import ManifestDirectory from '../manifest/manifestDirectory';
import ManifestShare from '../manifest/manifestShare';
import SubMenu from '../menu/subMenu'
import './content.css'

export default function content() {
  return (
    <div className='content-main'>

      <div className='content-space'>
        <h1>content</h1>
        <ManifestShare />
        <ManifestDirectory />
      </div>

      <div className='right-menu'>
        <SubMenu />
      </div>


    </div>
  )
}
