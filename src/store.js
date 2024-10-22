import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user/userSlice'
 export const  store = configureStore({
  reducer: {
    users:userSlice,
  },
},+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
