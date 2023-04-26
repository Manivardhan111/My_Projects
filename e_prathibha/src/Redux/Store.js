import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};
export const persistedReducer = persistReducer(persistConfig, RootReducer);
export const Store = createStore(RootReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);
