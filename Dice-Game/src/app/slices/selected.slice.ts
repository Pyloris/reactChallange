import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

enum Selected {
    ZERO = 0,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX
}

export interface SelectedState {
    value: Selected
}

const initialState: SelectedState = {
    value: Selected.ZERO
}

export const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<SelectedState>) => {
            return { value: action.payload.value }
        },
        unselect: (state) => {
            return { value: 0 }
        }
    }
})

export const { select, unselect } = selectedSlice.actions;

export default selectedSlice.reducer