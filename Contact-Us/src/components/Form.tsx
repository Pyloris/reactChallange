import React from 'react'
import MessageIcon from '../assets/chat.png'
import CallIcon from '../assets/phone-call.png'
import BlackMessageIcon from '../assets/comment.png'


function Form() {
  return (
    <div>
        <div className="w-full grid grid-cols-2 gap-5">
            <button className="flex gap-5 max-h-10 px-5 py-2 bg-black text-white font-extrabold rounded-lg"> <img className='max-w-6' src={MessageIcon} /> VIA SUPPORT CHAT</button>
            <button className='flex max-h-10 gap-5 justify-center px-5 py-2 bg-black text-white font-extrabold rounded-lg'> <img className='max-w-5' src={CallIcon} /> VIA CALL</button>
        </div>
        <div className='mt-2 w-full'>
            <button className='flex gap-5 w-full max-h-10 justify-center px-5 py-2 text-black font-bold rounded-lg border border-black'> <img className='max-w-6' src={BlackMessageIcon} /> VIA EMAIL FORM</button>
        </div>
        <div className='w-full flex flex-col gap-6 mt-5 px-12'>
            <div className='relative w-full h-10 border border-slate-700'>
                <label htmlFor="name" className='absolute -translate-y-3 translate-x-2 bg-white px-3 font-bold'>Name</label>
                <input className="w-full h-9 appearance-none outline-none px-5 py-2" type="text" name="name" id="name"/>
            </div>
            <div className='relative w-full h-10 border border-slate-700'>
                <label htmlFor="email" className='absolute -translate-y-3 translate-x-2 bg-white px-3 font-bold'>E-Mail</label>
                <input className="w-full h-9 appearance-none outline-none px-5 py-2" type="text" name="email" id='email' />
            </div>
            <div className="relative border border-slate-700">
                <label htmlFor="msg" className="absolute -translate-y-3 translate-x-2 px-4 bg-white font-bold">TEXT</label>
                <textarea className="w-full appearance-none outline-none px-5 py-2" name="message" id="msg" cols="30" rows="10"></textarea>
            </div>
            <div className='w-full flex justify-end items-center -mt-3 mb-5'>
                <button className='max-h-10 justify-center px-12 py-2 bg-black text-white font-extrabold rounded-lg'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Form