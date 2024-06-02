import React from 'react'
import { Link } from 'react-router-dom'

import FlipkartLogo from '../assets/flipkart.png'
import AmazonLogo from '../assets/amazon.png'

function HomeCall() {
  return (
    <div className='flex flex-col gap-7 mt-20'>
       <div className='font-extrabold text-6xl md:text-8xl w-[550px] tracking-light'>YOUR FEET DESERVE THE BEST</div>
       <div className='text-slate-500 font-extrabold tracking-normal w-[550px] text-2xl mx-auto md:mx-0 md:text-xl'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
       <div className='flex gap-5 mx-auto md:mx-0'>
          <Link className='px-4 py-2 font-bold text-xl text-white bg-red-500 hover:bg-red-700' to="shop">Shop Now</Link>
          <Link className='px-4 py-2 border border-slate-600 text-xl font-bold text-slate-600 hover:bg-slate-800 hover:text-slate-100' to="category">Category</Link>
       </div>
       <div className='flex flex-col gap-3 mx-auto md:mx-0'>
        <p className='text-sm text-slate-600'>Also Available On</p>
        <div className='flex gap-3'>
          <a href="https://flipkart.com">
            <img className='w-10' src={FlipkartLogo}/>
          </a>
          <a href="https://amazon.com">
            <img className='w-10' src={AmazonLogo}/>
          </a>
        </div>
       </div>
    </div>
  )
}

export default HomeCall