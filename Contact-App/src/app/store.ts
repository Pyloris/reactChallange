import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './slices/modalSlice'
import contactReducer from "./slices/contactSlice";

export default configureStore({
    reducer: {
        modal: modalReducer,
        contacts: contactReducer 
    }
})