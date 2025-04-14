import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersStateType = {
  nameQuery: string;
  cityQuery: string;
  emailQuery: string;
  resetFilters: boolean;
};

const initialState: FiltersStateType = {
  nameQuery: '', // Фильтрация по имени
  cityQuery: 'Все', // Фильтрация по городу
  emailQuery: 'Все', // Фильтрация по email
  resetFilters: false, // Флаг указывающий на сброс фильтров
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setInitialQueryParams(state, action: PayloadAction<Partial<Omit<FiltersStateType, 'resetFilters'>>>) {
      state.nameQuery = action.payload.nameQuery || '';
      state.cityQuery = action.payload.cityQuery || 'Все';
      state.emailQuery = action.payload.emailQuery || 'Все';
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.nameQuery = action.payload;
    },
    setCityQuery(state, action: PayloadAction<string>) {
      state.cityQuery = action.payload;
    },
    setEmailQuery(state, action: PayloadAction<string>) {
      state.emailQuery = action.payload;
    },
    setResetFilter(state, action: PayloadAction<boolean>) {
      state.resetFilters = action.payload;
    },
    setResetFilters(state) {
      state.nameQuery = '';
      state.cityQuery = 'Все';
      state.emailQuery = 'Все';
    },
  },
});

export default filtersSlice.reducer;
export const { setSearchQuery, setCityQuery, setEmailQuery, setResetFilter, setResetFilters, setInitialQueryParams } =
  filtersSlice.actions;
