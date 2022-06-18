import React from 'react'

export default function manifestItem(props) {

  const manifests = [
    { 
      id: 393988282288282,
      manifest: 'The journey of a thousand miles begins with one step.',
      postedTime: '10 mins ago',
      user: {
        name: 'Lao Tzu',
        photo: 'https://placekitten.com/80/80',
        id: 22331
      }
    }, 
    {
      id: 393988282288283,
      manifest: 'That which does not kill us makes us stronger.',
      postedTime: '10 mins ago',
      user: {
        name: 'Friedrich Nietzsche',
        photo: 'https://placekitten.com/80/80',
        id: 22333
      }

    }

  ]


  return (
    <div>
      {manifests.map((m)=>{
        return (
          <div key={m.id}>
            <p>{m.manifest}</p>
            <User user={m.user}/>
            
          </div>
        )
      })
      }
    
    


  </div>
  )
}
