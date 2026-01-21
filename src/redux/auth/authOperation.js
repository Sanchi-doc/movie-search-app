import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000'
const setAuthHeader = (token) =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``
}

export const register = createAsyncThunk('auth/register', async (credations, thunkAPI) => {
    try {
        const{ data: {data} } = await axios.post('/api/auth/register', credations)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (credations, thunkAPI) => {
    try {
       const { data: { data } } = await axios.post('/api/auth/login', credations)
       
       setAuthHeader(data.token)
       return data
    } catch(error) {
       return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/api/auth/logout')
       clearAuthHeader()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
})

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token
        if(!token){
            return thunkAPI.rejectWithValue('cannot get user data')
        } 
        setAuthHeader(token)
        const { data: {data} } = await axios.get('/api/auth/refresh')
        return data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})