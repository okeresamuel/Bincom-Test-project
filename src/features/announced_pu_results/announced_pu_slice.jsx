import {createSlice} from "@reduxjs/toolkit"
import {get_announced_pu} from "../announced_pu_results/announced_pu_action"

const initialState = {
    announced_pu: [],
    error: false,
    success:false,
    message: false 
}

const announced_pu = createSlice({
    name: "announced_pu",
    initialState,
    reducers: {},
    extraReducers:{
     [get_announced_pu.pending]:(state)=>{
      return {
        ...state,
        error: false,
        success:false,
        loading: true,
        message: false 
      }
     },
     [get_announced_pu.fulfilled]:(state, action)=>{
        return {
         ...state,
         error: false,
         success:true,
         loading: false,
         announced_pu: action.payload 
        }
     },
     [get_announced_pu.rejected]:(state, action)=>{
        return {
            ...state,
            error: true,
            success:false,
            loading: false,
            message: action.payload 
        }
    }
    }
})

export default announced_pu.reducer