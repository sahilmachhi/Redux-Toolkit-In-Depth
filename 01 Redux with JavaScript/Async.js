import { legacy_createStore as createStore, applyMiddleware } from "redux"
import axios from "axios"


import { thunk } from 'redux-thunk';


const initialState = {
    loading: false,
    users: [],
    error: ""
}


const fetchRequested = "fetchRequested"
const fetchSuccess = "fetchSuccess"
const fetchError = "fetchError"

const fetchRequest = () => {
    return {
        type: fetchRequested
    }
}

const fetchDone = (users) => {
    return {
        type: fetchSuccess,
        payload: users
    }
}

const fetchFailed = (error) => {
    return {
        type: fetchError,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchRequested:
            return {
                ...state,
                loading: true
            }

        case fetchDone:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ""
            }
        case fetchFailed: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload,
        }
    }
}



console.log("its working")

const fetchUserData = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get("https://dogapi.dog/api/v2/breeds").then(res => {
            const users = res.data.data.map((user => user.attributes.name))
            // console.log(users)
            dispatch(fetchDone(users))
        }).catch((error) => {
            console.log(error)
            dispatch(fetchFailed(error.message))
        })
    }
}
const store = createStore(reducer, applyMiddleware(thunk));

console.log("its working")




store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUserData())