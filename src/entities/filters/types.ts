import { RootStateType } from '@/store/store';

// Тип для списка фильтров
export type FiltersType = {
  label: 'Город' | 'Почта';
  selectOption: ({ filters }: RootStateType) => string;
  selectOptionsList: ({ options }: RootStateType) => string[];
};

// Типы для хука useSearchQueries

export type SearchParamKeys = 'nameQuery' | 'cityQuery' | 'emailQuery';

export type SearchParams = Record<SearchParamKeys, string>;
