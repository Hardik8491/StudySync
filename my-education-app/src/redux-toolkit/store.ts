"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        cart:cartSlice
    },
    devTools: false,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware as any),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const initializeApp = async () => {
    await store.dispatch(
        apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
    );
    await store.dispatch(
        apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
    );
};
initializeApp();


export default store;
