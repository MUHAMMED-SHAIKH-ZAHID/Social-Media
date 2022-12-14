import {configureStore} from '@reduxjs/toolkit'
import {authslice} from '../features/AuthSlice'

const store = configureStore({
    reducer:{
        user: authslice
    }
})

export default store;