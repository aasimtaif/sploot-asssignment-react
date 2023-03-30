import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/UserLogin'

export const store = configureStore({
  reducer: {
    user: userReducer ,
  },
})