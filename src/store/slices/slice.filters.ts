import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersStateType = {
  searchQuery: string;
  cityQuery: string;
  emailQuery: string;
  resetFilters: boolean;
};

const initialState: FiltersStateType = {
  searchQuery: '', // Фильтрация по имени
  cityQuery: 'Все', // Фильтрация по городу
  emailQuery: 'Все', // Фильтрация по email
  resetFilters: false, // Флаг указывающий на сброс фильтров
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setCityQuery(state, action: PayloadAction<string>) {
      state.cityQuery = action.payload;
    },
    setEmailQuery(state, action: PayloadAction<string>) {
      state.emailQuery = action.payload;
    },
    setResetFilters(state, action: PayloadAction<boolean>) {
      state.resetFilters = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setSearchQuery, setCityQuery, setEmailQuery, setResetFilters } = filtersSlice.actions;
