import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        hide: 0,
        bound: {
            id: "",
            name: "",
            email: ""
        }
    },
    reducers: {
        show: (state, action) => {
            state.hide = 1;
            state.bound = action.payload;
        },
        hide: (state) => {
            state.hide = 0;
            state.bound = {id: "", name: "", email: ""};
        },
        toggle: (state, action) => {
            state.hide = state.hide ? 0 : 1;
            state.bound = action.payload;
        }
    }
})

export const { show, hide, toggle } = modalSlice.actions;
export default modalSlice.reducer;