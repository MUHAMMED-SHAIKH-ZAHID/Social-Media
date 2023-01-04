import {configureStore} from '@reduxjs/toolkit'
import authslice from '../features/AuthSlice'
import PostSlice from '../features/PostSlice';

const store = configureStore({
    reducer:{
        user: authslice,
        post: PostSlice,
        
    }
})

export default store;