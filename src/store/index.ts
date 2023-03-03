

import { createStore, applyMiddleware, compose } from "redux";
// import {createStore} from "@reduxjs/toolkit"
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/es/storage"; // defaults to localStorage for web
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
    key: "root",
    storage,
    // stateReconciler: hardSet,
    whiteList: [
        // "eventReducer",
        "loginReducer"
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer
const initialState = {};
const middleware = [ReduxThunk];

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
