import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URL } from "../../../configue/constance";
const initialState = {
    todos: [],
    error: '',
    loading: false
}

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', async () => {
        const response = await axios.get(`${BASE_URL}/todos`)
        return response.data

    }
)
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending,
             (state) => { return { ...state, loading: true } })
        builder.addCase(fetchTodos.fulfilled, 
            (state,action) => { return { ...state, loading: false ,todos:action.payload} })
        builder.addCase(fetchTodos.rejected,
             (state,action) => { return { ...state, loading: false ,error:action.payload} })
    },
    

})
export default todoSlice.reducer