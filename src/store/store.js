import { configureStore } from "@reduxjs/toolkit";
import { movieRed } from "./movieReducer";



const store = configureStore({
    reducer: movieRed,
})


export default store;