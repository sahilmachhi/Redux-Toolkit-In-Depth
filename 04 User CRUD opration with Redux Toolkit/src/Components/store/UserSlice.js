import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null
}

const UserSlice = createSlice({
    initialState,
    name: "userDetails",
    reducers: {}
})


export default UserSlice