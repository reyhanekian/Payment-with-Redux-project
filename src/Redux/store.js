import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const store = configureStore({
    reducer:{                                   
        card:Reducer
        
    }
})

export default  store ; 