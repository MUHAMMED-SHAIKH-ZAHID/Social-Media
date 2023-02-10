import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../../axios'
import { adminauth, admingoogle, auth } from "../../url";

const initialState={
    token:"",
    user:"",
    loading:"",
    error:"",
    admin:"",
}

export const signUpUser=createAsyncThunk('signupuser',async(body)=>{
    console.log("Sec.........",body.data);
    return await axios.post(`${auth}register`,body.data).then(({data})=>{
     console.log(data,"its the response in the register user create AsyncThunk")
     return data
    })
})

export const loginUser=createAsyncThunk('loginUser',async(body)=>{
    console.log(body,"this is the console log of login user ")
    return await axios.post(`${auth}login`,body).then(({data})=>{
        console.log(data,"its the responce of login@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        return data;    
    })
})

export const googleUser=createAsyncThunk('googleuser',async(body)=>{
    console.log("google user body in the thunk ",body);
    return await axios.post(`${auth}google`,body).then(({data})=>{
     console.log(data,"its the response in the Google user create AsyncThunk")
     return data
    })
})

export const adminlogin=createAsyncThunk('adminlogin',async(body)=>{
    console.log(body,"this is the console log of login user ")
    return await axios.post(`${adminauth}`,body).then(({data})=>{
        console.log(data,"its the responce of login@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        return data;    
    })
})

export const Admingoogle=createAsyncThunk('admingoogle',async(body)=>{
    console.log("google user body in the thunk ",body);
    return await axios.post(`${admingoogle}`,body).then(({data})=>{
     console.log(data,"its the response in the Google user create AsyncThunk")
     return data
    })
})

 const authslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addToken :(state,action)=>{
            localStorage.getItem("token")
        },
        addUser :(state,action)=>{
            state.user=JSON.parse(localStorage.getItem("user"))
        },
        logout :(state,action)=>{
            state.token=null
            localStorage.clear()
        }
    },
    extraReducers(builder){
       
        //...........signUp...............
        builder.addCase(signUpUser.pending,(state,action)=>{
            state.loading =true
            console.log(state.user.username,"it is in the pending state of the signup user in the  Auth slice")
        })
        builder.addCase(signUpUser.fulfilled,(state,action)=>{
            state.loading =false
          state.loading =false
            let  user = action.payload.username
            let token = action.payload.token

            state.user=user
            state.token=token

            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('token',token)
            
            console.log(action,"the output is in AuthSlice.js and testing the fullfilled state is corect or not of signUp",token)
        })
        builder.addCase(signUpUser.rejected,(state,action)=>{
            state.loading =false
        })

        //............Login..................
        builder.addCase(loginUser.pending,(state,action)=>{
            state.loading =true
         
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
          
            state.loading =false
            let  user = action.payload.username
            let token = action.payload.token

            state.user=user
            state.token=token

            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('token',token)
            
            console.log(action,"the output is in AuthSlice.js and testing the fullfilled state is corect or not",token)
        })

        //.................Google User...........
        builder.addCase(googleUser.pending,(state,action)=>{
            state.loading =true
         
        })
        builder.addCase(googleUser.fulfilled,(state,action)=>{
          
            state.loading =false
            let  user = action.payload.username
            let token = action.payload.token
             console.log( action.payload.username,"the log in the google user fullfilled to check userId")
            state.user=user
            state.token=token

            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('token',token)
            
            console.log(action,"the output is in AuthSlice.js and testing the fullfilled state is corect or not",token)
        })
        builder.addCase(googleUser.rejected,(state,action)=>{
            state.loading =false
        })

          //............AdminLogin..................
          builder.addCase(adminlogin.pending,(state,action)=>{
            state.loading =true
         
        })
        builder.addCase(adminlogin.fulfilled,(state,action)=>{
          
            state.loading =false
            let  user = action.payload.username
            let token = action.payload.token

            state.admin=user
            state.token=token

            localStorage.setItem('admin',JSON.stringify(user))
            localStorage.setItem('Token',token)
            
            console.log(action,"the output is in AuthSlice.js and testing the fullfilled state is corect or not",token)
        })
    }
})

 export const {addToken, addUser, logout}=authslice.actions
export default authslice.reducer