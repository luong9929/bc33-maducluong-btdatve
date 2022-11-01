import {configureStore} from '@reduxjs/toolkit'
import chonVeReducer from './reducer/chonVeReducer'


export const store = configureStore({
    reducer:{
        chonVeReducer:chonVeReducer
    }
})