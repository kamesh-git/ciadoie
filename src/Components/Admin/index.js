import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink, Route, Routes, redirect } from 'react-router-dom';
import useFirebase from '../../assests/useFirebase';
import SignIn from './SignIn';
import Panel from './Panel';
import Notification from './Notification';

const Admin = () => {
  const { auth } = useFirebase();
  const [isSignedIn, setIsSignedIn] = useState(false)



  onAuthStateChanged(auth,(user) => {
    if(user){
      setIsSignedIn(true) 
    }
    else{
      setIsSignedIn(false)
    }
  })

  function AdminContent({ role }) {
    return (
      <>
        <Notification />
      </>
    )
  }

  return (
    <>
      {isSignedIn ?
        <>
        <Routes>
          <Route path='/' element={<Panel />} />
        </Routes>
        </>

        : <SignIn />}
    </>
  )
}

export default Admin