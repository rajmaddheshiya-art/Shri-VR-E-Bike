import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:null,
        otherUser:null,
        isLoading: true,
        socket:null
    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData = action.payload;
        },

        setOtherUser:(state,action)=>{
            state.otherUser = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setSocket: (state, action) => {
            state.socket = action.payload;
        }
    }
})

export const {setUserData ,setOtherUser,setLoading,setSocket} = userSlice.actions

export default userSlice.reducer