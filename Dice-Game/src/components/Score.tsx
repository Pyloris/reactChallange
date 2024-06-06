import type { RootState } from '../app/store'
import { useSelector } from 'react-redux'

function Score() {
    const score: number = useSelector((state: RootState) => state.score.value)

    return (
      <div>
        <div className="text-6xl font-roboto text-center">{score}</div>
        <div className="text-xl font-roboto">Score</div>
      </div>
    )
}

export default Score