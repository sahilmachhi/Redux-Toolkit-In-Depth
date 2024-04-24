import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null,
    searchData: ""
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

export const showUserData = createAsyncThunk("showData", async (any, { rejectWithValue }) => {
    const response = await fetch("https://661d0d36e7b95ad7fa6bf9a3.mockapi.io/UserData");
    try {
        const data = await response.json();
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://661d0d36e7b95ad7fa6bf9a3.mockapi.io/UserData/${id}`, {
        method: "delete"
    })
    try {
        const data = await response.json();
        return data.id
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const editUser = createAsyncThunk("editUser", async (user, { rejectWithValue }) => {
    let id = user.id

    const response = await fetch(`https://661d0d36e7b95ad7fa6bf9a3.mockapi.io/UserData/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
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
    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload

        }
    },
    extraReducers: (builder) => {

        // add data opration
        builder.addCase(userData.pending, (state) => {
            state.loading = true;
        })
            .addCase(userData.fulfilled, (state, action) => {

                state.loading = false;
                state.users.push(action.payload);

            })
            .addCase(userData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

        // list data opration
        builder.addCase(showUserData.pending, (state) => {
            state.loading = true;
        })
            .addCase(showUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


        // delete opration
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter((user) => user.id != action.payload)
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


        // edit opration
        builder.addCase(editUser.pending, (state) => {
            state.loading = true;
        })
            .addCase(editUser.fulfilled, (state, action) => {
                state.loading = false;
                const updatedUser = action.payload;
                state.users = state.users.map((user) => {
                    if (user.id === updatedUser.id) {
                        return updatedUser;
                    }
                    return user;
                });
            })
            .addCase(editUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})


export default UserSlice
export const { searchUser } = UserSlice.actions