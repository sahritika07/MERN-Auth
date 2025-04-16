import React, { useState } from 'react'
import {assets} from '../assets/assets.js'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  return (
    <div className='flex items-center min-h-screen justify-center px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <img src={assets.logo} className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state === 'Sign Up' ? 'Create account' :'Login'}</h2>
        <p className='text-center text-sm mb-6'>{state === 'Sign Up' ? 'Create your account' :'Login to your account!'}</p>
        <form >
          {state === 'Sign Up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'> 
            <img src={assets.person_icon} />
            <input className='bg-transparent outline-none' type="text" placeholder='Full Name' required/>
          </div>
          )}
          
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'> 
            <img src={assets.mail_icon} />
            <input className='bg-transparent outline-none' type="email" placeholder='Email id' required/>
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'> 
            <img src={assets.lock_icon} />
            <input className='bg-transparent outline-none' type="password" placeholder='Password' required/>
          </div>
          <p className='mb-4 text-indigo-500 cursor-pointer'>Forgot Password?</p>
          <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium'>{state}</button>
        </form>
        {state === 'Sign Up' ? (
          <p className='text-gray-400 text-center text-xs mt-4'>Already have an account? {'  '}
          <span onClick={() => setState('Login')} className='text-blue-400 cursor-pointer underline'>Login here</span>
        </p>
        ) : (
          <p  className='text-gray-400 text-center text-xs mt-4'>Don't have an account? {'  '}
          <span onClick={() => setState('Sign Up')} className='text-blue-400 cursor-pointer underline'>Sign Up</span>
        </p>
        )}
        
        
      </div>
    </div>
  )
}

export default Login
