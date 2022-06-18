import React from 'react';
import ManifestDirectory from '../manifest/manifestDirectory';
import ManifestShare from '../manifest/manifestShare';

export default function content() {
  return (
    <div>
      <h1>content</h1>
      <ManifestShare />
      <ManifestDirectory />
    </div>
  )
}
