import { foodReducer } from '../store/Module.reducer'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: foodReducer
})