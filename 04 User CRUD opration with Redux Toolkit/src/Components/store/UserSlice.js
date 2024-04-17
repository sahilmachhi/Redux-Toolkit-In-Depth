import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null
}
const userData = createAsyncThunk("userData", async (data) => {
    const response = await fetch("https://661d0d36e7b95ad7fa6bf9a3.mockapi.io/UserData", {
        method: "POST", Headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(data)
    });

    try {
        const data = await response.json();
        return console.log(data)
    } catch (error) {
        console.log(error)
    }

})
const UserSlice = createSlice({
    initialState,
    name: "userDetails",
    reducers: {},
    extraReducers: {
        [userData.pending]: (state) => {
            state.loading = true;
        },
        [userData.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload)
        },
        [userData.rejected]: (state) => {
            state.loading = false
        }
    }
})


export default UserSlice
