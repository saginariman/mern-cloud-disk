import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import appReducer from "./appReducer"
import fileReducer from "./fileReducer"
import uploadReducer from "./uploadReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))