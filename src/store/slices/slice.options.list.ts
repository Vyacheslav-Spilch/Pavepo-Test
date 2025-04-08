import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OptionsFilterType = {
  cityList: string[];
  emailList: string[];
};

const initialState: OptionsFilterType = {
  cityList: [], // Список возможных для фильтра городов
  emailList: [], // Список возможных для фильтра почт
};

export const optionsListSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCityOptions(state, action: PayloadAction<string[]>) {
      state.cityList = action.payload;
    },
    setEmailOptions(state, action: PayloadAction<string[]>) {
      state.emailList = action.payload;
    },
  },
});

export default optionsListSlice.reducer;
export const { setCityOptions, setEmailOptions } = optionsListSlice.actions;
