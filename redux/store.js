import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import profileSlice from './slices/profile'


const makeStore = () => configureStore({
    reducer: {
        profile: profileSlice
    },
    devTools: true
})

export const wrapper = createWrapper(makeStore)