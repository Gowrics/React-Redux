import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';
import  UserReducer from './slices/UserReducer';

const store= configureStore( {
    devTools:true,
    reducer:{                            //state for store
        customers: customerReducer,
        users:UserReducer
        
    }
})
export default store;