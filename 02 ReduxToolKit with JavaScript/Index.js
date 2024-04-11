import store from "./App/Store/Store";
import { bought } from "./App/Slices/NiftySlice"

console.log("initial state", store.getState())

store.dispatch(bought(1))

console.log("after state", store.getState())


