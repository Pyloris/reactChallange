import Dice from '../components/Dice'
import Button from '../components/Button'
import Score from '../components/Score'
import SelectBtn from '../components/SelectBtn'
import HowTo from '../components/HowTo'


import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { add, decrement } from '../app/slices/score.slice'

function Play() {

    const score: number = useSelector((state: RootState) => state.score.value)
    const selected: number = useSelector((state: RootState) => state.selected.value)

    const dispatch = useDispatch()


    function resetScore() {
        dispatch(decrement({ value: score }));
    }

    function showHowTo() {
        document.getElementById("howTo")?.classList.toggle("hidden");
    }

    return (
        <div className="w-full h-screen p-5">
            <div className="w-full flex flex-row justify-between items-center px-[100px] mt-12">
                <div><Score /></div>
                <div className="flex gap-5 justify-between items-center">
                    <SelectBtn value="1" />
                    <SelectBtn value="2" />
                    <SelectBtn value="3" />
                    <SelectBtn value="4" />
                    <SelectBtn value="5" />
                    <SelectBtn value="6" />
                </div>
            </div>

            <div className="w-full mt-[150px] flex flex-col items-center justify-center gap-7">
                <div>
                    <Dice />
                </div>
                <p className="font-roboto font-bold text-lg">Click on the dice to roll</p>
                <div onClick={resetScore}>
                    <Button text="Reset Score" theme="light" />
                </div>
                <div onClick={showHowTo}>
                    <Button text="Show Rules" theme="dark" />
                </div>
                <div className="hidden" id="howTo">
                    <HowTo />
                </div>
            </div>
        </div> 
    )
}

export default Play