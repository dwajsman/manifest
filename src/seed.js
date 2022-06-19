import { addDoc, collection } from "firebase/firestore"

/**
 * 
 * @param {firebase} firebase
 * @returns 
 */
export async function seedUsers(db, name) {
  const users = [
    {
      userId: 'Fmx3mSw8mtSUtT7TfEYnJuoao0X2',
      username: 'mvrs',
      fullName: 'Marlon Johnson',
      emailAddress: 'marlon_johnson@gmail.com',
      favoriteManifestos: ['393988282288284'],
      likedManifestos: [],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'DATTA',
      fullName: 'Datta Velivela',
      emailAddress: 'data@gmail.com',
      favoriteManifestos: [],
      likedManifestos: [],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'd_money',
      fullName: 'Daniel Wajsman',
      emailAddress: 'daniel@gmail.com',
      favoriteManifestos: [],
      likedManifestos: [],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'khushi',
      fullName: 'Khushi Shukla',
      emailAddress: 'daniel@gmail.com',
      favoriteManifestos: [],
      likedManifestos: [],
      dateCreated: Date.now()
    }
  ]

  try {
    for (const user of users) {
      await addDoc(collection(db, name), user)
    }
  } catch (error) {
    console.err("Error writing with ID: ", error)
  }

}

export async function seedManifestations(db, name) {
  const manifestos = [
    {
      manifestoId: 393988282288282,
      manifest: 'The journey of a thousand miles begins with one step.',
      postedTime: '10 mins ago',
      dateCreated: Date.now(),
      userId: '2',
      feedback: {
        star: true,
        spark: false,
        like: false,
        heart: true
      }
    },
    {
      manifestoId: 393988282288283,
      manifest: 'That which does not kill us makes us stronger.',
      postedTime: '10 mins ago',
      dateCreated: Date.now(),
      userId: 'Fmx3mSw8mtSUtT7TfEYnJuoao0X2',
      feedback: {
        star: true,
        spark: false,
        like: false,
        heart: true
      }
    },
    {
      manifestoId: 393988282288284,
      manifest: 'The only way to do great work is to love what you do.',
      postedTime: '10 mins ago',
      dateCreated: Date.now(),
      userId: '3',
      feedback: {
        star: true,
        spark: false,
        like: false,
        heart: true
      }
    },
    {
      manifestoId: 393988282288285,
      manifest: 'If you can dream it, you can do it.',
      postedTime: '10 mins ago',
      dateCreated: Date.now(),
      userId: '4',
      feedback: {
        star: true,
        spark: false,
        like: false,
        heart: true
      }
    },
  ]

  try {
    for (const m of manifestos) {
      await addDoc(collection(db, name), m)
    }
  } catch (error) {
    console.err("Error writing with ID: ", error)
  }
}