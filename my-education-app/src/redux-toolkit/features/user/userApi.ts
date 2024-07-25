import {apiSlice} from '../api/apiSlice';
import {userLogin} from '../auth/authSlice';

export const userApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        updateAvatar:builder.mutation({
            query:(avatar)=>({
                url:'/update-user-avatar',
                method:'PUT',
                body:{avatar},
                credentials:'include' as const
            })
        }),
    
    })
});

export const {useUpdateAvatarMutation}=userApi;