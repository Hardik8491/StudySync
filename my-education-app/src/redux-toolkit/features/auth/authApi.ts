import { log } from "console";
import { apiSlice } from "../api/apiSlice";
import { userLogin, userLogout, userRegister } from "./authSlice";
type RegistrationResponse = {
    message: string;
    activationToken: string;
};

type RegistrationData = {};
export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoint for user registration
        register: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "register",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
                    
                    dispatch(userRegister({ accessToken: result.data.activationToken as string }));
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
        activation: builder.mutation({
            query: ({ activationToken, activationCode }) => (
                {
              
                url: "activation-user",
                method: "POST",
                body: { activationToken, activationCode },
                credentials: "include" as const,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
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
        socialAuth: builder.mutation({
            query: (data) => ({
                url: "/social-auth",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
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
        logout: builder.query({
            query: () => ({
                url: "logout",
                method: "GET",
                credentials: "include" as const,
            }),
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            try {
               
                dispatch(userLogout());
            } catch (error: any) {
                console.log(error);
            }
         
        }
        })
    }),
});

export const { useRegisterMutation, useActivationMutation,useLoginMutation,useSocialAuthMutation,useLogoutQuery } = authApi;
