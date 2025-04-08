import { usersApi } from '@/api/users.api';
import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '@/store/slices/slice.filters';
import { useDispatch, useSelector } from 'react-redux';
import optionsListSlice from './slices/slice.options.list';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    filters: filtersSlice,
    options: optionsListSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootStateType>();
