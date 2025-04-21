import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { FaArrowRight } from 'react-icons/fa';
import Particle from '../components/Particle.jsx';

const Header = () => {
  const {userData} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      <img src={assets.header_img} alt="" className='rounded-full w-36 h-36 mb-6 -mt-10' />
      
      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2 '>Hey {userData ? userData.name : 'Tech Savvy'}! <img className='w-8 aspect-square' src={assets.hand_wave}/> </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4 font-['Times_New_Roman',serif]">Welcome to the Tech Zone!</h2>
      <p className='mb-8 w-1/2 text-xl pl-10 pr-10'>We're excited to have you here. Explore, discover and enjoy everything about the tech world. Showcase your work, launch projects, find jobs, and connect with the most incredible people.</p>
      <button className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all flex items-center gap-2">
  Get Started
  <FaArrowRight />
</button>

    </div>
  )
}

export default Header
