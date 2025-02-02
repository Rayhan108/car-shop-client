import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import { persistStore } from "redux-persist";
const persistConfig={
    key:"auth",
    storage
}
const persistedAuthReducer=persistReducer(persistConfig,authReducer)
export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth:persistedAuthReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware( {serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },}).concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)