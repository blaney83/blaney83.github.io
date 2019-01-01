import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import portfolioReducer from "./Portfolio/reducer"
import graphReducer from "./Graphs/reducer"
import portfolioSort from "./p3/reducer"
import p5reducer from "./p5/reducer"

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const reducers = combineReducers({
    portfolioReducer,
    graphReducer,
    portfolioSort,
    p5reducer
});

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    pReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

