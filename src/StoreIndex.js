import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"
import commonReducer from 'Views/Common/Slice/Common_slice';


const reducers = combineReducers({
    commonState: commonReducer
})

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk),
    devTools: true
})

export default store;