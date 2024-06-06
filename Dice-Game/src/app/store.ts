import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './slices/score.slice'
import selectedReducer from './slices/selected.slice'

export const store = configureStore({
    reducer: {
        score: scoreReducer,
        selected: selectedReducer
    }
})

// get the types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch