import React from 'react'

import Navbar from '../components/Navbar'
import HomeIcon from '../components/HomeIcon'
import HomeCall from '../components/HomeCall'

function Home() {
  return (
    <>
      <Navbar />

      <div className='w-full h-screen flex justify-around items-center px-10'>
        <HomeCall />
        <HomeIcon />
      </div>
    </>
  )
}

export default Home