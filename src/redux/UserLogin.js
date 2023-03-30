import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null
}

export const userSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        storeUser: (state, action) => {
            state.user=action.payload
        },
        storeToken: (state,action) => {
            state.token = action.payload
        },
        logOut: (state) => {state = null}

    },
})

// Action creators are generated for each case reducer function
export const { storeUser, storeToken, logOut } = userSlice.actions

export default userSlice.reducer