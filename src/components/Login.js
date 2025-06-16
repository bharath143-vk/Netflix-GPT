import React, { useState,useRef } from 'react'
import Header from './Header'
import checkValidation from '../utils/validate'
const Login = () => {

    const[signInForm,setSignInForm]=useState(true)
    const[errorMessage,setErrorMessage]=useState(null)

    const email=useRef(null)
    const password=useRef(null)

    const toggleSignInForm=()=>{
        setSignInForm(!signInForm);
    }

    
    const handleSubmit=()=>{
      const message=checkValidation(email.current.value,password.current.value)
      setErrorMessage(message)
    }

    
  return (
    <div>
        <Header />
        <div>
          <img src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
           alt="logo"
           className='absolute'/>
        </div>
        <div>
            <form 
            className=' absolute w-3/12 p-10  mx-auto my-44 left-0 right-0 bg-black text-white bg-opacity-80'
            onSubmit={(e)=> e.preventDefault()}>
                <h2 className='text-3xl p-2 m-2 font-bold'>{signInForm?"Sign in":"Sign up"}</h2>
                {
                    !signInForm && 
                    <input
                        type="text" 
                        placeholder='Enter Name'
                        className='p-2 my-4 w-full bg-gray-700'
                        />
                }
                
                <input
                ref={email}
                 type="text"
                  placeholder='Enter email' 
                  className='p-2 my-4 w-full bg-gray-700' 
                />

                <input
                ref={password}
                 type="password" 
                 placeholder='Enter password'
                  className='p-2 my-4 w-full bg-gray-700'
                 />
                <p className='text-red-700 font-bold text-xl'>{errorMessage}</p>
                <button type='submit'
                 className='p-2 my-6 w-full bg-red-700 rounded-lg' onClick={handleSubmit}
                 
                 >{signInForm?"Sign in":"Sign up"}
                </button>

                <p className='m-2 p-2' 
                onClick={toggleSignInForm}
                >{signInForm?"New to Netflix? Sign up now":"Already registerd?Sign in"}</p>

            </form>
        </div>
    </div>
  )
}

export default Login
