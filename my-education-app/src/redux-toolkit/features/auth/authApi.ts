import { apiSlice } from "../api/apiSlice";
import { userLogin, userRegister } from "./authSlice";
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
                    dispatch(
                        userRegister({ token: result.data.activationToken })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
        activation: builder.mutation({
            query: ({ activationToken, activationCode }) => ({
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
                        userLogin({accessToken: result.data.activationToken,
                        user:result.data.user })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useRegisterMutation, useActivationMutation,useLoginMutation } = authApi;
