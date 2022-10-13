import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import gameSlice from './slices/game'
import preloaderSlice from './slices/preloader'
import profileSlice from './slices/profile'
import signinSlice from './slices/signin'


const makeStore = () => configureStore({
    reducer: {
        profile: profileSlice,
        preloader: preloaderSlice,
        signin: signinSlice,
        game: gameSlice
    },
    devTools: true
})

export const wrapper = createWrapper(makeStore)