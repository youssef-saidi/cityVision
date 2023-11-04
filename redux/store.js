import { configureStore } from '@reduxjs/toolkit'
import buttonSlice from './slices/buttonSlice'
import userSlice from './slices/userSlice'
import cameraSlice from './slices/cameraSlice';





 const store = configureStore({
    reducer: {
      user: userSlice,
      button:buttonSlice,
      camera:cameraSlice
    },
  })

  export default store ;
