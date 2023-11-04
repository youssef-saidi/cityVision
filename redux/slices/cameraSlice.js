import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  options:[{
    option: "Camera 1"
  },
  {
    option: "Camera 2"
  },
  {
    option: "Camera 3"
  },
  ],
  cameraChoosed:""

}

export const cameraSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    selectCamera: (state,action) => {
      state.cameraChoosed = action.payload
    },


  

  },
})

// Action creators are generated for each case reducer function
export const { selectCamera } = cameraSlice.actions

export default cameraSlice.reducer