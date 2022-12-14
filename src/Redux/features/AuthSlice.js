import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../../axios'
//import { auth } from "../url";

const initialState={
    msg:"",
    user:"",
    loading:"",
    error:""
}

export const signUpUser=createAsyncThunk('signupuser',async(body)=>{
    console.log("Sec.........",body.data);
    return await axios.post('register',body.data).then((res)=>{
        return console.log(res.data)
    })
})

export const loginUser=createAsyncThunk('loginUser',async(body)=>{
    console.log(body,"this is the console log of login user ")
    return await axios.post('login',body.data).then((res)=>{
        return console.log(res,"its the responce of login")
    })
})

export const authslice = createSlice({
    name:"user",
    initialState,
    extraReducers:{
       
        //...........signUp...............
        [signUpUser.pending]:(state,action)=>{
            state.loading =true
        },
        [signUpUser.fulfilled]:(state,{payload:error,msg})=>{
            state.loading =false
            if(error){
                state.error =error
            }else{
                state.msg=msg
            }
        },
        [signUpUser.rejected]:(state,action)=>{
            state.loading =false
        },

        //............Login..................
        [loginUser.pending]:(state,action)=>{
            state.loading =true
        },
        [loginUser.fulfilled]:(state,{payload:error,msg})=>{
            state.loading =false
            if(error){
                state.error =error
            }else{
                state.msg=msg
            }
        },
        [loginUser.rejected]:(state,action)=>{
            state.loading =false
        },
    }
})
 
// export const {addToken, addUser, logout}=authslice.actions
//export default authslice.reducer