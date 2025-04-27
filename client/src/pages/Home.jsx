import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
// import Particles from './Particles';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-cover  bg-center'>


      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}
      <Navbar />
      <Header />
    </div>
  )
}

export default Home
