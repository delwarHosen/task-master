import AsyncStorage from '@react-native-async-storage/async-storage'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.252.13.92:8052/',
        prepareHeaders: async (headers) => {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: () => 'task/get-all-task',
        }),
    }),
})

export const { useGetAllTasksQuery } = tasksApi
