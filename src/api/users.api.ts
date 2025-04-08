import { UsersData } from '@/entities/user/types/types';
import { setCityOptions, setEmailOptions } from '@/store/slices/slice.options.list';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  // В будущем при добавлению функционала по мутации данных, с помощью метки "Users" можно будет инвалидировать их
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query<UsersData[], void>({
      query: () => `/users`,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: users } = await queryFulfilled;

          //После успешного получения данных, добавляем два списка по которым будет происходить фильтрация (Slice - select.options.list)
          dispatch(setCityOptions(['Все', ...new Set(users?.map(user => user.address.city))]));
          dispatch(setEmailOptions(['Все', ...new Set(users?.map(user => user.email))]));
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
    }),
    getUserById: builder.query<UsersData, number>({
      query: (id: number) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
