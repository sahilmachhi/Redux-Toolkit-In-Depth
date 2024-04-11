import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    stockName: "nifty",
    numberOfStocks: 20
}

const NiftySlice = createSlice({
    name: "Nifty",
    initialState,
    reducers: {
        bought: (state) => {
            state.numberOfStocks - 1
        },
        sold: (state, action) => {
            state.numberOfStocks += action.payload
        }
    }
})

export default NiftySlice.reducer
export const { bought, sold } = NiftySlice.actions