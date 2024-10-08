import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogin } from "../auth/authSlice";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            query: (data) => ({
                url: "refresh",
                method: "GET",
                credentials: "include" as const,
            }),
        }),
        loadUser: builder.query({
            query: () => ({
                url: "me",
                method: "GET",
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(
                        result.data.accessToken,
                        result.data.user,
                        result
                    );

                    dispatch(
                        userLogin({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
