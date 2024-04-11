import { configureStore } from "@reduxjs/toolkit"
import NiftySlice, { } from "../Slices/NiftySlice"

const store = configureStore({
    reducer: {
        nifty: NiftySlice
    }
})

export default store