import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'
import { commentAPI, getpostAPI, likeAPI, postAPI } from "../../url";
const initialState = {
    loading: "Loading",
    post: [],
    userId:'',
    refresh:false,
}

export const uploadPost = createAsyncThunk('imagePost', async (body) => {
        const token = localStorage.getItem('token')
        console.log(body,"its the body in upload post createAsyncThunk body thats been sented to backend")
        return await axios.post(`${postAPI}`, body, { headers: { 'authorization': 'Bearer ' + token } }).then(({ data }) => {
            return data
        }).catch ((err)=>{
            console.log(err)
        })
})

export const getPosts = createAsyncThunk('getPosts', async () => {
    console.log("reaches in the getposts in the postslice");
    const token = localStorage.getItem('token')
    return await axios.get(`${getpostAPI}`, { headers: { 'authorization': 'Bearer ' + token } }).then(({ data }) => {
        console.log(data.posts,"its the post taken from backend and reached at the getposts createAsyncThunk")
        return data
    }).catch(err => {
        console.log(err)
    })
})

export const likePosts = createAsyncThunk('likePosts', async (body) => {
    console.log();
    const token = localStorage.getItem('token')
    return await axios.post(`${likeAPI}`,body, { headers: { 'authorization': 'Bearer ' + token } }).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
})

export const commentPost = createAsyncThunk('commentPost', async (body) => {
    const token = localStorage.getItem('token')
    return await axios.post(`${commentAPI}`,body, { headers: { 'authorization': 'Bearer ' + token } }).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
})






const PostSlice = createSlice({
    name: "upload_Post",
    initialState,
    reducers: {
      refresh:(state,action)=>{
        state.refresh =!!refresh
        console.log(state.refresh,"Inside of reducer");
      }
    },


    extraReducers: (builder) => {
        //..............Upload image....................

        builder.addCase(uploadPost.pending, (state, action) => {

            console.log("Pending of loading Image");
            //state.loading = "Pending"
        })

        builder.addCase(uploadPost.fulfilled, (state, action) => {
            console.log(" full filled Image");
            //state.loading = "Successfully added"

        })

        builder.addCase(uploadPost.rejected, (state, action) => {
            //state.loading = "Uploading failed please try again"
            console.log("Rejected of uploaded image");
        })

        //.........................Loading Posts........................

        builder.addCase(getPosts.pending, (state, action) => {

            //console.log("Pending of loading posts");
            state.loading = "Successfully added"
        })

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.post = action.payload.posts
            state.userId = action.payload.userId
            console.log("full filled posts",action.payload.posts); 

        })

        builder.addCase(getPosts.rejected, (state, action) => {
            //state.loading = "Loading failed please try again"
            //console.log("Rejected of Loading");
        })

        //.......................Likes ............................

        builder.addCase(likePosts.pending, (state, action) => {

            console.log("Pending of like");
            //state.loading = "Pending"
        })

        builder.addCase(likePosts.fulfilled, (state, action) => {
            console.log(" full filled like");
            state.likes=action.payload

        })

        builder.addCase(likePosts.rejected, (state, action) => {
            //state.loading = "Uploading failed please try again"
            console.log("Rejected of like");
        })
    }
})


export const {refresh}=PostSlice.actions
export default PostSlice.reducer