import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';


const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(store=>(store.user))
  const handleSignOut= async () => {
    try {
      await signOut(auth);
      
    } catch (error) {
      console.error("Error signing out:", error.message);
      
    }
  };

  useEffect(()=>{
   
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName}=user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
      } else {
        // console.log("User is logged out");
        dispatch(removeUser())
        navigate("/")
      }
    });

    //Unsubscribe when component unmounts
    return ()=>unsubscribe();
  },[])

  return (
    <div className='absolute w-screen px-6 py-4 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div className='w-44 px-6 py-4'>
        <img src={LOGO_URL}
         alt="logo"
        />
      </div>
      {user &&  (
        <div className='flex '>
          <div className='w-12 py-4'>
            <img src={USER_AVATAR} />
          </div>
        
          <button className="py-2 border-black font-bold text-white"onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
      
  )
}

export default Header