import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    moviesList: [],
    currentPage: 0,
    currentSearchPage: 0,
    totalPage: 1,
    totalSearchResultPage:1,
    error: "",
    searchQuery: ""
}

const movieReducer = createSlice({
    initialState: initialState,
    reducers: {
        setReducerStateWithKey: (state, action) => {
            return {...state, [action.payload.type]: action.payload.payload}
        },
        setReducerState: (state, action) => {
            return {...state, ...action.payload}
        }
    },
    name: "movieReducer"
})


export const movieRed = movieReducer.reducer
export const actions = movieReducer.actions
export default movieReducer;