import React from 'react'
import ServiceImage from '../assets/service.png'
import Text from '../components/Text'
import Form from '../components/Form'

function Contact() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
        
        <div className="absolute top-[200px] max-w-7xl -translate-x-20">
            <Text />
        </div>

        <div className="absolute bottom-0 w-full flex gap-[100px] justify-center">
            <div className="px-5 mt-5">
                <Form />
            </div>
            <div className="relative translate-y-4">
                <img src={ServiceImage} />
            </div>
        </div>
    </div>
  )
}

export default Contact