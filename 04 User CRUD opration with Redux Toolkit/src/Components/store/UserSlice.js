import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null
}
export const userData = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://661d0d36e7b95ad7fa6bf9a3.mockapi.io/UserData", {
        method: "POST", headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(data)
    });

    try {
        const data = await response.json();
        return data
    } catch (error) {
        return rejectWithValue(error)
    }

})
export const UserSlice = createSlice({
    initialState,
    name: "userDetails",
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(userData.pending, (state) => {
            state.loading = true;
        })
            .addCase(userData.fulfilled, (state, action) => {
                console.log("before data push", action.payload)
                state.loading = false;
                state.users.push(action.payload);
                console.log("after data push", action.payload)
            })
            .addCase(userData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})


export default UserSlice.reducer
