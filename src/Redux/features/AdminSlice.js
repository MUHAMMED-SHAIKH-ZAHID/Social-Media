
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { actionOnUserAPI,  admindeletepostAPI,  adminRemovepostAPI, adminsinglepostAPI, dashbordDataAPI, deleteReportAPI, getAllPostAPI, getAllUsersAPI, getReportAPI } from "../../url";
import axios from '../../axios'



const initialState = {
    refresh: false,
    profileid:"",
    AllPosts:[],
    onepost:'',
    emailVerified:[],
    Newusers:[],
}

export const getReport = createAsyncThunk('getReport', async () => {
    try {
        const token = localStorage.getItem('Token')
        const { data } = await axios.get(`${getReportAPI}`, { headers: { 'authorization': 'Bearer ' + token } })
        return data
    } catch (err) {
        console.log(err)
    } 
})

export const deleteReport = createAsyncThunk('deleteReport', async (reportid) => {
    try {
        console.log("in the thunk of delete report",reportid);
        const token = localStorage.getItem('Token')
        const { data } = await axios.delete(`${deleteReportAPI}`,  { data: { reportid } }, { headers: { 'authorization': 'Bearer ' + token } })
        return data
    } catch (err) {
        console.log(err)
    } 
})

export const adminremovepost = createAsyncThunk("adminremovepost", async (params) => {
    console.log(
      "its the delete post of the admin async thunk with its params",
      params
    );
    const token = localStorage.getItem("Token");
    return await axios
      .post(`${adminRemovepostAPI}` , params, {
        headers: { authorization: "Bearer " + token },
      })
      .then(({ data }) => {
        return {data:data,id:params}
      })
      .catch((err) => {
        console.log(err);
      });
  });

export const getAllUsers = createAsyncThunk('getAllUsers', async () => {
    try {
        const token = localStorage.getItem('Token')
        const { data } = await axios.get(`${getAllUsersAPI}`, { headers: { 'authorization': 'Bearer ' + token } })
        return data
    } catch (err) {
        console.log(err)
    } 
})

export const blockOrUnBlockUsers = createAsyncThunk('getAllUsers', async (body) => {
    console.log("in the blocked thunk ",body);
    try {
        const token = localStorage.getItem('Token')
        const { data } = await axios.post(`${actionOnUserAPI}`,body, { headers: { 'authorization': 'Bearer ' + token } })
        return data
    } catch (err) {
        console.log(err) 
    } 
})

export const adminSinglePost = createAsyncThunk("adminsinglepost", async (params) => {
    console.log(
      "its the delete post of the admin async thunk with its params",
      params
    );
    const token = localStorage.getItem("Token");
    return await axios
      .get(`${adminsinglepostAPI}` + params, {
        headers: { authorization: "Bearer " + token },
      })
      .then(({ data }) => {
        return {data:data,id:params}
      })
      .catch((err) => {
        console.log(err);
      });
  });

export const AllPost = createAsyncThunk('AllPost', async () => {
    try {
        const token = localStorage.getItem('Token')
        const { data } = await axios.get(`${getAllPostAPI}`, { headers: { 'authorization': 'Bearer ' + token } })
        console.log(data,"response of all post in the admin");
        return data
    } catch (err) {
        console.log(err) 
    } 
})

export const admindeletepost = createAsyncThunk("admindeletepost", async (params) => {
  console.log(
    "its the delete post of the admin async thunk with its params",
    params
  );
  const token = localStorage.getItem("Token");
  return await axios
    .delete(`${admindeletepostAPI}` + params, {
      headers: { authorization: "Bearer " + token },
    })
    .then(({ data }) => {
      return {data:data,id:params}
    })
    .catch((err) => {
      console.log(err);
    });
});

export const dashbordData = createAsyncThunk('dashbordData', async () => {
  try {
      const token = localStorage.getItem('Token')
      const { data } = await axios.get(`${dashbordDataAPI}`, { headers: { 'authorization': 'Bearer ' + token } })
      console.log(data,"response of all post in the admin");
      return data
  } catch (err) {
      console.log(err) 
  } 
})




const AdminSlice = createSlice({

    name: "admin",
    initialState,
    reducers: {
        refresh: (state, action) => {
            state.refresh = !!refresh;
            console.log(state.refresh, "Inside of reducer");
          },
    },
    extraReducers :(builder) => {
        //...............All Post..........................
        builder.addCase(AllPost.fulfilled, (state, action) => {
    
         console.log(action.payload,"its the all post man");
         state.AllPosts=action.payload
           
          });

          //.............Single Post.........................
          builder.addCase(adminSinglePost.fulfilled, (state, action) => {
    
            console.log(action.payload.data,"its the fullfilled Singlepost");
            state.onepost=action.payload.data
              
             });

          //..............Dashbord DAta ..................................   
          builder.addCase(dashbordData.fulfilled, (state, action) => {
    
            console.log(action.payload.users,"its the fullfilled dashborddata");
            state.emailVerified=action.payload.users
            state.Newusers =action.payload.data
             });
    }
})

export const { refresh } = AdminSlice.actions;
export default AdminSlice.reducer