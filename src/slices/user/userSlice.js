import { createSlice } from '@reduxjs/toolkit'
  const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers: {
    addUser: (state,action) => {
      if(action.payload !==""){
        state.push(action.payload);
      }
      else{}

    },
    deleteUser: (state,action) => {
      state.splice(action.payload,1)
    },
    edit: (state,action) => {
      state.splice(action.payload,1)
    },
    clear: (state) => {
      // state.value += action.payload
      return [];
    },
  },
})
export const { addUser, clear, deleteUser,edit } = userSlice.actions;

export default userSlice.reducer;