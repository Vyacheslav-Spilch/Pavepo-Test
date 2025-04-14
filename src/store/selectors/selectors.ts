import { RootStateType } from '../store';

//Получение значений выбранных фильтров и значения поисковой строки
export const selectNameQuery = ({ filters }: RootStateType) => filters.nameQuery;
export const selectCityQuery = ({ filters }: RootStateType) => filters.cityQuery;
export const selectEmailQuery = ({ filters }: RootStateType) => filters.emailQuery;
export const selectResetFilters = ({ filters }: RootStateType) => filters.resetFilters;

//Получения списка возможных фильтров по городу и почте
export const selectOptionsCity = ({ options }: RootStateType) => options.cityList;
export const selectOptionsEmail = ({ options }: RootStateType) => options.emailList;
