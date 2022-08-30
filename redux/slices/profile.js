import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: '',
        email: '',
        userid: ''
    },
    reducers: {
        setProfile: (state,action) =>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.userid = action.payload.userid
            state.token = action.payload.token
        }
    }
})

export const {setProfile} = profileSlice.actions

export default profileSlice.reducer