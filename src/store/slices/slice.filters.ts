import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersStateType = {
  searchQuery: string;
  cityQuery: string;
  emailQuery: string;
};

const initialState: FiltersStateType = {
  searchQuery: '', // Фильтрация по имени
  cityQuery: 'Все', // Фильтрация по городу
  emailQuery: 'Все', // Фильтрация по email
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
  },
});

export default filtersSlice.reducer;
export const { setSearchQuery, setCityQuery, setEmailQuery } = filtersSlice.actions;
