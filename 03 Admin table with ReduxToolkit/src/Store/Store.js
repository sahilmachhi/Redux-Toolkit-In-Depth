import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlices"


const store = configureStore({
    reducer: {
        users: UserSlice.reducer
    }
})


export default store
