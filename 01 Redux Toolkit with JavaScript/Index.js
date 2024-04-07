const redux = require("redux")
const createStore = redux.legacy_createStore


const stock = "Nifty"

function buyStock() {
    return {
        type: stock,
        lot: 1
    }
}

const initialState = {
    numberOfStocks: 12000
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case stock: return {
            ...state,
            numberOfStocks: state.numberOfStocks - 50

        }
        default:
            return state
    }
}


const store = createStore(reducer)
console.log("initial state", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

store.dispatch(buyStock())
store.dispatch(buyStock())
store.dispatch(buyStock())
store.dispatch(buyStock())

unsubscribe()