import { createSlice } from "@reduxjs/toolkit";


export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        preloader: true
    },
    reducers: {
       
    }
})

export const {setGame} = gameSlice.actions

export default gameSlice.reducer