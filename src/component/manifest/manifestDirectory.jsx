import React from 'react'
import ManifestItem from './manifestItem';


export default function manifestDirectory() {

  const manifests = [
    { 
      id: 393988282288282,
      manifest: 'The journey of a thousand miles begins with one step.',
      postedTime: '10 mins ago',
      user: {
        name: 'Lao Tzu',
        photo: 'https://placekitten.com/80/80',
        id: 22331
      },
      feedback: {
        star: true,
        spark: false,
        like: false,
        heart: true,
      }
    }, 
    {
      id: 393988282288283,
      manifest: 'That which does not kill us makes us stronger.',
      postedTime: '10 mins ago',
      user: {
        name: 'Friedrich Nietzsche',
        photo: 'https://placekitten.com/81/80',
        id: 22333
      },
      feedback: {
        star: true,
        spark: false,
        like: false,
        heart: true,
      }
    }

  ]

  return (
    <div>
      <h2>manifestDirectory</h2>


      {manifests.map((manifest)=>{
        return (
          <ManifestItem manifest={manifest} key={manifest.id} />

        )
      })
      } 
      
    </div>

  )
}
