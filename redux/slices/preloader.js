import { createSlice } from "@reduxjs/toolkit";


export const preloaderSlice = createSlice({
    name: 'preloader',
    initialState: {
        preloader: true
    },
    reducers: {
        setPreloader: (state,action) =>{
            state.preloader = false
        }
    }
})

export const {setPreloader} = preloaderSlice.actions

export default preloaderSlice.reducer