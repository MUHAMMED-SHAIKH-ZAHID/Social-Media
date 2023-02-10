import {configureStore} from '@reduxjs/toolkit'
import AdminSlice from '../features/AdminSlice';
import authslice from '../features/AuthSlice'
import PostSlice from '../features/PostSlice';

const store = configureStore({
    reducer:{
        user: authslice,
        post: PostSlice,
        admin:AdminSlice,
        
    }
})

export default store;