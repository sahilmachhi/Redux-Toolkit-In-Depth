import { legacy_createStore as createStore, bindActionCreators, combineReducers } from 'redux'



const nifty_bought = "nifty_bought"
const nifty_sold = "nifty_sold"
const bankNifty_bought = "banknifty_bought"
const bankNifty_sold = "banknifty_sold"

function buyNifty(lot = 1) {
    return {
        type: nifty_bought,
        payload: lot * 50
    }
}

function sellNifty(lot = 1) {
    return {
        type: nifty_sold,
        payload: lot * 50
    }
}

function buyBankNifty(lot = 1) {
    return {
        type: bankNifty_bought,
        payload: lot * 15
    }
}

function sellBankNifty(lot = 1) {
    return {
        type: bankNifty_sold,
        payload: lot * 15
    }
}

const niftyInitialState = {
    numberOfNiftyStocks: 12000,
}

const BankNiftyInitialState = {
    numberOfBankNiftyStocks: 3000
}
// (previousState, action) => newState
const NiftyReducer = (state = niftyInitialState, action) => {
    switch (action.type) {
        case nifty_bought: return {
            ...state,
            numberOfNiftyStocks: state.numberOfNiftyStocks + action.payload
        }
        case nifty_sold: return {
            ...state,
            numberOfNiftyStocks: state.numberOfNiftyStocks - action.payload
        }
        default:
            return state
    }
}


const BankNiftyReducer = (state = BankNiftyInitialState, action) => {
    switch (action.type) {
        case bankNifty_bought: return {
            ...state,
            numberOfBankNiftyStocks: state.numberOfBankNiftyStocks + action.payload
        }
        case bankNifty_sold: return {
            ...state,
            numberOfBankNiftyStocks: state.numberOfBankNiftyStocks - action.payload
        }
        default:
            return state
    }
}

const reducer = combineReducers({
    nifty: NiftyReducer,
    bankNifty: BankNiftyReducer
})

const store = createStore(reducer)
console.log("initial state", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})
// store.dispatch(sellNifty(10))
// store.dispatch(buyNifty(5))
// store.dispatch(buyNifty())

// store.dispatch(buyNifty())

const action = bindActionCreators({ buyNifty, sellNifty, buyBankNifty, sellBankNifty }, store.dispatch)

action.buyNifty(20)

action.sellBankNifty(10)
action.buyBankNifty(1500)

unsubscribe()

action.buyBankNifty(1500)