import { createSlice } from "@reduxjs/toolkit";

interface state {
    contacts: any[]
}

const initialState: state = {
    contacts: []
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        reset: (state) => {
            state.contacts = [];
        },
        insert: (state, action) => {
            state.contacts = [...state.contacts, ...action.payload]
            console.log(state.contacts);
        },
        remove: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id != action.payload)
        }
    }
})

export const { reset, insert, remove } = contactSlice.actions;
export default contactSlice.reducer;