import { createSlice } from "@reduxjs/toolkit";


export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: '',
        userid: ''
    },
    reducers: {
        setUserid: (state,action) =>{
            state.userid = action.payload
        },
        setName: (state,action) =>{
            state.name = action.payload
        }
    }
})

export const {setUserid,setName} = profileSlice.actions

export default profileSlice.reducer