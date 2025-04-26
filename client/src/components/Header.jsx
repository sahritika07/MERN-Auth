import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { FaArrowRight } from 'react-icons/fa';
import Particle from '../components/Particle.jsx';

const Header = () => {
  const {userData} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      <img src={assets.header_img} alt="" className='rounded-full w-36 h-36 mb-6 -mt-10  border-2 border-purple-500' />
      
      <h1 className='flex items-center gap-2 text-lg sm:text-xl font-medium mb-2 '>Hey {userData ? userData.name : 'Tech Savvy'}! <img className='w-8 aspect-square' src={assets.hand_wave}/> </h1>
      <h2 className="text-5xl sm:text-4.75xl font-semibold mb-4 font-['Times_New_Roman',serif] text-purple-700">Welcome to the Tech Zone!</h2>
      <p className='mb-8 w-1/2 text-lg -mt-4 pl-20 pr-20'>We are excited to have you here. Explore, discover and enjoy everything about the tech world. Showcase your work, launch projects, find jobs & connect with the most creative and incredible people.</p>
      <button className="border border-violet-600 rounded-full text-white px-8 py-2.5 bg-purple-500 hover:bg-purple-600 transition-all flex items-center gap-2">
  Get Started
  <FaArrowRight className="invert brightness-0"/>
</button>

    </div>
  )
}

export default Header
