import { createSlice } from "@reduxjs/toolkit"

const initialState = [

]

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {

            state.push({
                id: Math.random(),
                text: action.payload
            })
        },
        deleteUser: (state) => {
            state.pop()
        }
    }
})

export default UserSlice
export const { addUser, deleteUser } = UserSlice.actions