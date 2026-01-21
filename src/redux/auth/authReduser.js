import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refresh} from '../auth/authOperation';

const initialState = {
   user : {
    name : null,
    email: null,
   },
   token : null,
   isLoggedIn : false,
   isRefreshed: false
}
export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    extraReducers: builder => builder.addCase(register.pending, (state) => state)
    .addCase(register.rejected, (state) => state)
    .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.name,
        state.user.email = action.payload.email
        state.token = action.payload.token,
        state.isLoggedIn = true,
        state.isRefreshed = false
    })
    .addCase(login.rejected, (state) => state)
    .addCase(login.pending, (state) => state)
    .addCase(login.fulfilled, (state, action) => {
        state.user.name = action.payload.name,
        state.user.email = action.payload.email,
        state.token = action.payload.token,
        state.isLoggedIn = true,
        state.isRefreshed = false

    })
    .addCase(logout.rejected, (state) => {
        state.user.name = null,
        state.user.email = null,
        state.token = null,
        state.isLoggedIn = false,
        state.isRefreshed = false
    })
    .addCase(logout.pending, (state) => {
        state.user.name = null,
        state.user.email = null,
        state.token = null,
        state.isLoggedIn = false,
        state.isRefreshed = false
    })
    .addCase(logout.fulfilled, (state) => {
        state.user.name = null,
        state.user.email = null,
        state.token = null,
        state.isLoggedIn = false,
        state.isRefreshed = false
    })
    .addCase(refresh.rejected, () => initialState)
    .addCase(refresh.pending, (state) => {
        state.isRefreshed = true
    })
    .addCase(refresh.fulfilled, (state, action) => {
        state.user.name = action.payload.name,
        state.user.email = action.payload.email,
        state.token = action.payload.token,
        state.isLoggedIn = true,
        state.isRefreshed = false
    })
})
