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
    <div className="w-full h-screen flex gap-10 justify-center items-center">
        <div>
            <img className='w-[700px]' src={HeroPng} />
        </div>
        <div>
            <div className="font-extrabold text-8xl font-roboto">DICE GAME</div>
            <div>
                <Link to="play" ><Button text="Play Now" theme="dark"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero