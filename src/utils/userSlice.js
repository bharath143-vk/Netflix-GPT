import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            console.log('added user')
            return action.payload        //setting user
        },
        removeUser:(state,action)=>{
            return null;          //removing user by setting null
        },
    },
})

export const {addUser,removeUser} =userSlice.actions;
export default userSlice.reducer;