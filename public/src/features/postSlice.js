import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
    name : 'post',
    initialState : {
        value: [],
    },
    reducers : {
        addPost: (state, action) =>{
            state.value.unshift(action.payload)
        },
        fetchAllPost: (state, action) =>{
            state.value = (action.payload)
        },
    },
});

export const {addPost, fetchAllPost} = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;