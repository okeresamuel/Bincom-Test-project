import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

// sending api request....
export const get_announced_pu = createAsyncThunk("get_announced_pu", async(_, {rejectWithValue})=>{
    try {
        const response = await axios.get("http://localhost:5000/App")
        return response.data   
    } catch (error) {
        return rejectWithValue(error.data)
    }
})