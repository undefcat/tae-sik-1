import { configureStore } from '@reduxjs/toolkit'
import information from './state/information'

export default configureStore({
  reducer: {
    information,
  },
})