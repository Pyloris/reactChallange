import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import HeroPng from '../assets/images/hero.png'
import Button from '../components/Button'

function Hero() {

  // set the title of the page
  useEffect(() => {
    document.title = "Play Dice"
  }, []);


  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center md:flex-row">
        <div>
            <img className='w-[300px] md:w-[700px]' src={HeroPng} />
        </div>
        <div>
            <div className="font-extrabold text-6xl font-roboto">DICE GAME</div>
            <div className="w-full flex justify-center items-center md:justify-start">
                <Link to="play" ><Button text="Play Now" theme="dark"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero