import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ScoreState {
    value: number
}

const initialState: ScoreState = {
    value: 0
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ScoreState>) => {
            return { value: state.value + action.payload.value }
        },
        decrement: (state, action: PayloadAction<ScoreState>) => {
            if (state.value >= action.payload.value)
                return { value: state.value - action.payload.value };
            return { value: 0 };
        }
    }
})

export const { add, decrement } = scoreSlice.actions;

export default scoreSlice.reducer