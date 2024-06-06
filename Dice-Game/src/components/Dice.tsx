import { useState } from 'react'
import Dice1 from '../assets/images/1.png'
import Dice2 from '../assets/images/2.png'
import Dice3 from '../assets/images/3.png'
import Dice4 from '../assets/images/4.png'
import Dice5 from '../assets/images/5.png'
import Dice6 from '../assets/images/6.png'

import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { add, decrement } from '../app/slices/score.slice'

import RollAudio from '../assets/audio/roll.mp3'
import ErrorAudio from '../assets/audio/error.mp3'

function Dice() {
  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const selected = useSelector((state: RootState) => state.selected.value)

  const audioFile = new Audio(RollAudio);
  const errorAudio = new Audio(ErrorAudio);

  const dispatch = useDispatch();

  const [currFace, setFace] = useState(Dice4);

  const faces = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  async function roll(event: Event) {
    event.stopPropagation();

    if (selected == 0) {
      document.getElementById("howTo")?.classList.remove("hidden");
      errorAudio.play();
      return;
    }
    
    audioFile.play();
    let randomNumber: number = 0;

    for (let i = 0; i < 10; i++) {

      await timeout(100);
      // search for 100 random numbers from 0 - 5
      randomNumber = Math.floor(Math.random()*10000 % 5);

      setFace(faces[randomNumber]); 
    }

    if (randomNumber == selected - 1) {
      dispatch(add({ value: selected }));
    }
    else {
      dispatch(decrement({ value: 2 }));
    }
  }

  return (
    <div>
      <img className="w-[150px]" onClick={roll} src={currFace} />
    </div>
  )
}

export default Dice