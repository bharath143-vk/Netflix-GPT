import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    }
])

const Body = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log('before auth in useEffect')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user logged in")
        const {uid,email,displayName}=user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      } else {
        // console.log("User is logged out");
        dispatch(removeUser())
      }
    });
  })
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body