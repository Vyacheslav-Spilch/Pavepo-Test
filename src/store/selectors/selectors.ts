import { RootStateType } from '../store';


//Получение значений выбранных фильтров и значения поисковой строки
export const selectSearchQuery = ({ filters }: RootStateType) => filters.searchQuery;
export const selectCityQuery = ({ filters }: RootStateType) => filters.cityQuery;
export const selectEmailQuery = ({ filters }: RootStateType) => filters.emailQuery;

//Получения списка возможных фильтров по городу и почте
export const selectOptionCity = ({ options }: RootStateType) => options.cityList
export const selectOptionEmail = ({ options }: RootStateType) => options.emailList