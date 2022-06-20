import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../lib/utils';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  /**
   * logout user
   */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user)
      if (user) {
        const { email, metadata, photoURL, displayName, uid } = user;
        setUser({ email, metadata, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  /**
   * register our user
   */
  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  /**
   * login our user
   */

  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

  /**
   * logout our user
   */

  const logoutUser = () => signOut(auth);

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;