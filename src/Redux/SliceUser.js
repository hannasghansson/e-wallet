import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getUser = createAsyncThunk("user/getUsers", async () => {

    return fetch("https://randomuser.me/api/").then((res) =>
      res.json()
    );})
  

const SliceUser = createSlice({
    name:"user",
    initialState: {
        user: {
            first:'',
            last:''
            
        }

        
    },
    reducers: {},
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
          state.user.first = action.payload.results[0].name.first
          state.user.last = action.payload.results[0].name.last

        },
    },

})


export default SliceUser.reducer
