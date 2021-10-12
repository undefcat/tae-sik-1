import { createSlice } from '@reduxjs/toolkit'

const informationSlice = createSlice({
  name: 'information',
  initialState: {
    balju: '',
    sigong: '',
    name: '',
    address: '',
  },

  reducers: {
    change(state, action) {
      const { name, value } = action.payload

      state[name] = value
    }
  }
})

export const { change } = informationSlice.actions

export default informationSlice.reducer