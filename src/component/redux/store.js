import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./fetures/todo-slice";
 const store=configureStore({
    reducer:{todoSlice : todoSlice}
})
export default store