import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import {
  clearNotificationAPI,
  commentAPI,
  deletepostAPI,
  EditpostAPI,
  FollowuserAPI,
  getaPostAPI,
  getAspecificuser,
  getpostAPI,
  getuserDetails,
  getuserProfile,
  likeAPI,
  postAPI,
  ReportPostAPI,
  savedAPI,
  searchUsersAPI,
  unFollowuserAPI,
} from "../../url";


const initialState = {
  loading: false,
  post: [],
  userId: "",
  refresh: false,
  currentUserDetails: "",
  Profiledata: "",
  singlePost: "",
  postupdate:false,
  Blocked:false
};

export const uploadPost = createAsyncThunk("imagePost", async (body) => {
  const token = localStorage.getItem("token");
  console.log(
    body,
    "its the body in upload post createAsyncThunk body thats been sented to backend"
  );
  return await axios
    .post(`${postAPI}`, body, { headers: { authorization: "Bearer " + token } })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const Editpost = createAsyncThunk("EditPost", async (body) => {
  const token = localStorage.getItem("token");
  console.log(
    body,
    "edit post thunk"
  );
  return await axios
    .post(`${EditpostAPI}`, body, { headers: { authorization: "Bearer " + token } })
    .then(({ data }) => {
      console.log(data,body.id,"ambili in the async thunk");
      return {data:data,body:body}
    })
    .catch((err) => {
      console.log(err);
    });
});

export const getPosts = createAsyncThunk("getPosts", async () => {
  console.log("reaches in the getposts in the postslice");
  const token = localStorage.getItem("token");
  return await axios
    .get(`${getpostAPI}`, { headers: { authorization: "Bearer " + token } })
    .then(({ data }) => {
      console.log(
        data.posts,
        "its the post taken from backend and reached at the getposts createAsyncThunk"
      );
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const likePosts = createAsyncThunk("likePosts", async (body) => {
  console.log();
  const token = localStorage.getItem("token");
  return await axios
    .post(`${likeAPI}`, body, { headers: { authorization: "Bearer " + token } })
    .then(({ data }) => {
      return { data: data, id: body.id };
    })
    .catch((err) => {
      console.log(err);
    });
});

export const commentPost = createAsyncThunk("commentPost", async (body) => {
  const token = localStorage.getItem("token");
  return await axios
    .post(`${commentAPI}`, body, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const getuser = createAsyncThunk("getuser", async () => {
  const token = localStorage.getItem("token");
  return await axios
    .get(`${getuserDetails}`, { headers: { authorization: "Bearer " + token } })
    .then(({ data }) => {
      console.log(
        data.posts,
        "its the post taken from backend and reached at the getposts createAsyncThunk"
      );
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const getspecificuser = createAsyncThunk(
  "getspecificuser",
  async (params) => {
    const token = localStorage.getItem("token");
    return await axios
      .get(`${getAspecificuser}` + params, {
        headers: { authorization: "Bearer " + token },
      })
      .then(({ data }) => {
        console.log(data, "its Specific User createAsyncThunk");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

export const clearNotification = createAsyncThunk("getuser", async () => {
  console.log("clearnotification is called");
  const token = localStorage.getItem("token");
  return await axios
    .get(`${clearNotificationAPI}`, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      console.log(
        data.posts,
        "its the post taken from backend and reached at the getposts createAsyncThunk"
      );
      return data;
    })
    .catch((err) => {
     if (err.response.data) {initialState.Blocked = "true" }
     throw new Error({message:"Blocked"})
    });
});

export const userProfile = createAsyncThunk("userProfile", async (params) => {
  console.log("thunk of userProfile to get the profile  page");
  const token = localStorage.getItem("token");
  return await axios
    .get(`${getuserProfile}` + params, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      console.log(
        data.posts,
        "its the post taken from backend and reached at the getposts createAsyncThunk"
      );
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const savePost = createAsyncThunk("savepost", async (body) => {
  console.log(body, "reached in the savepost in the thunk");
  const token = localStorage.getItem("token");
  return await axios
    .post(`${savedAPI}`, body, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      return { data: data, id: body.id };
    })
    .catch((err) => {
      console.log(err);
    });
});

export const getaPost = createAsyncThunk("getaPost", async (params) => {
  console.log(
    "get a post to show a single post in a page to look stunning",
    params
  );
  const token = localStorage.getItem("token");
  return await axios
    .get(`${getaPostAPI}` + params, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      console.log(
        data.posts,
        "its the post taken from backend and reached at the getposts createAsyncThunk"
      );
      return data;
    })
    .catch((err) => {

      console.log(err);
    });
});

export const deletepost = createAsyncThunk("deletepost", async (params) => {
  console.log(
    "its the delete post async thunk with its params",
    params
  );
  const token = localStorage.getItem("token");
  return await axios
    .delete(`${deletepostAPI}` + params, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      return {data:data,id:params}
    })
    .catch((err) => {
      console.log(err);
    });
});

export const Followuser = createAsyncThunk("follow", async (params) => {
  console.log("thunk of Followuser to get the profile  page",params);
  const token = localStorage.getItem("token");
  return await axios
    .post(`${FollowuserAPI}` , params , { headers: { "authorization": "Bearer " + token },})
    .then((status) => {
      console.log(
        status,
        "follow follow followo follow follow"
      );
      return {status:status.data.status,id:params.id};
    })
    .catch((err) => {
      console.log(err);
    });
});

export const unFollowuser = createAsyncThunk("unfollow", async (params) => {
  console.log("thunk of unfollow to get the profile  page",params);
  const token = localStorage.getItem("token");
  return await axios
    .post(`${unFollowuserAPI}` , params , { headers: { "authorization": "Bearer " + token },})
    .then((status) => {
      console.log(
        status,
        "unfollow unfollow followo follow follow"
      );
      return {status:status.data.status,id:params.id};
    })
    .catch((err) => {
      console.log(err);
    });
});

export const addReport = createAsyncThunk('addReport', async (body) => {
  console.log(body,"body of report in the thunk");
  try {
      const token = localStorage.getItem('token')
      const { data } = await axios.post(`${ReportPostAPI}`, body, { headers: { 'authorization': 'Bearer ' + token } })
      return data
  } catch (err) {
      console.log(err)
  }
})

export const searchUsers = createAsyncThunk('searchUsers', async (params) => {
  try {

      const token = localStorage.getItem('token')
      const { data } = await axios.get(`${searchUsersAPI}` + params, { headers: { 'authorization': 'Bearer ' + token } })
      return data
  } catch (err) {
      console.log(err)
  }
})

const PostSlice = createSlice({
  name: "upload_Post",
  initialState,
  reducers: {
    refresh: (state, action) => {
      state.refresh = !!refresh;
      console.log(state.refresh, "Inside of reducer");
    },
    deletenotification: (state, action) => {
      console.log(
        state.currentUserDetails.notification,
        "testing the deletenotification reducer working or not"
      );
      state.currentUserDetails.notification = null;
    },
  },

  extraReducers: (builder) => {
    //..............Upload image....................

    builder.addCase(uploadPost.pending, (state, action) => {
      
      //state.loading = "Pending"
    });

    builder.addCase(uploadPost.fulfilled, (state, action) => {
    
      state.postupdate=!state.postupdate
      //state.loading = "Successfully added"
    });

    builder.addCase(uploadPost.rejected, (state, action) => {
      //state.loading = "Uploading failed please try again"

    });

    //.........................Loading Posts........................

    builder.addCase(getPosts.pending, (state, action) => {
      //console.log("Pending of loading posts");
      state.loading = true;
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload.posts;
      state.userId = action.payload.userId;
      console.log(
        "full filled posts.....................",
        action.payload.posts
      );
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      //state.loading = "Loading failed please try again"
      //console.log("Rejected of Loading");
    });

    //.......................Likes ............................

    builder.addCase(likePosts.pending, (state, action) => {
      console.log("Pending of like");
      //state.loading = "Pending"
    });

    builder.addCase(likePosts.fulfilled, (state, action) => {
      console.log(state.userId, "lskfj;dajf;ajfk");
      for (let i = 0; i < state.post.length; i++) {
        if (state.post[i]._id === action.payload.id) {
          if (action.payload.data === "Post Liked") {
            state.post[i].likes = [...state.post[i].likes, state.userId];
          } else {
            state.post[i].likes = state.post[i].likes.filter(
              (item) => item !== state.userId
            );
          }
          break;
        }
      }
    });

    builder.addCase(likePosts.rejected, (state, action) => {
      //state.loading = "Uploading failed please try again"
      console.log("Rejected of like");
    });

    //...................getuserdetails.....................

    builder.addCase(getuser.pending, (state, action) => {
      //console.log("Pending of loading posts");
      state.loading = true;
    });

    builder.addCase(getuser.fulfilled, (state, action) => {
      state.loading = false;
      console.log(
        "stATE CUREENT USERDETAILS OF GET USER FULLFILLED mmhss",
        action.payload
      );
      state.currentUserDetails = action.payload;
    });

    builder.addCase(getuser.rejected, (state, action) => {
      //state.loading = "Loading failed please try again"
      //console.log("Rejected of Loading");
    });

    //...................Save Post.....................

    builder.addCase(savePost.pending, (state, action) => {
      //console.log("Pending of loading posts");
    });

    builder.addCase(savePost.fulfilled, (state, action) => {
        console.log(action.payload.data.status,"its the shaikh");
        if(action.payload.data.status){
           state.currentUserDetails.saved.push(action.payload.data.post)
        }else{
            state.currentUserDetails.saved = state.currentUserDetails.saved.filter((item)=>item._id !==action.payload.id)
        }
        console.log("its the sinana");
    });

    builder.addCase(savePost.rejected, (state, action) => {
      //state.loading = "Loading failed please try again"
      //console.log("Rejected of Loading");
    });

    //................Clear Notification...................

    builder.addCase(userProfile.pending, (state, action) => {
      //console.log("Pending of loading posts");
      state.loading = true;
    });

    builder.addCase(userProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.Profiledata = action.payload;
    });

    builder.addCase(userProfile.rejected, (state, action) => {
      //state.loading = "Loading failed please try again"
      //console.log("Rejected of Loading");
      state.loading = "false";
    });

    //.................Get A Post...........................

    builder.addCase(getaPost.pending, (state, action) => {
      //console.log("Pending of loading posts");
      state.loading = true;
    });

    builder.addCase(getaPost.fulfilled, (state, action) => {
      state.loading = false;
      console.log(
        "single post addcase fullfilled state of get a single post",
        action.payload
      );
      state.loading = "false";
      state.singlePost = action.payload;
    });

    builder.addCase(getaPost.rejected, (state, action) => {
      //state.loading = "Loading failed please try again"
      //console.log("Rejected of Loading");
      state.loading = "false";
    });

    //---------------------------cOmMeNt A pOsT------------------------

    builder.addCase(commentPost.pending, (state, action) => {
      //console.log("Pending of loading posts");
    });

    builder.addCase(commentPost.fulfilled, (state, action) => {
      console.log(action.payload.comments, "you are still in my heart");
      for (let i = 0; i < state.post.length; i++) {
        if (state.post[i]._id === action.payload.comments.post) {
          state.post[i].comments = [
            ...state.post[i].comments,
            action.payload.comments,
          ];

          break;
        }
      }
    });

    //----------------------Delete A Post ----------------------------

    builder.addCase(deletepost.fulfilled,(state,action)=>{
      console.log(action.payload,"zuhara")
      for(let i=0;i<state.post.length;i++) {
        if(state.post[i]._id === action.payload.id){
          console.log("inside zuhara",action.payload.id,state.post[1]);
          state.post= state.post.filter((item)=> item._id !== action.payload.id)
        }
      }
    })

    //------------------Follow User ------------------------------------
    builder.addCase(Followuser.fulfilled,(state,action)=>{
      console.log(action.payload.status,"follow in the fullfilled",action.payload.id);
      if(action.payload.status){
        state.currentUserDetails.following.push(action.payload.id)
      }
    })

    //..................Unfollow User ----------------------------------
    builder.addCase(unFollowuser.fulfilled,(state,action)=>{
      console.log(action.payload.status,"unfollow in the fullfilled");
      if(action.payload.status){
        state.currentUserDetails.following= state.currentUserDetails.following.filter((item)=>{
          return item !== action.payload.id
        })
      }
    })

    //...............................Edit  POst ..............................
    builder.addCase(Editpost.fulfilled,(state,action)=>{
      console.log(action.payload.data,"ambili without if",action.payload.data === 'Post Updated');
      if(action.payload.data === 'Post Updated'){
        console.log("amibili man its inside of the if");
        for (let i = 0; i < state.post.length; i++){
          if(state.post[i]._id === action.payload.body.id){
            console.log(state.post[i].caption,"ambili its almost done and checking data",action.payload.body.text);
            state.post[i].caption = action.payload.body.text
            
          }
        }
      }
    })
  },
});

export const { refresh } = PostSlice.actions;
export default PostSlice.reducer;
