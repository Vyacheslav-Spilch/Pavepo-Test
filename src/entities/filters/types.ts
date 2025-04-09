import { RootStateType } from '@/store/store';

// Тип для списка фильтров
export type FiltersType = {
  label: 'Город' | 'Почта';
  selectOption: ({ filters }: RootStateType) => string;
  selectOptionsList: ({ options }: RootStateType) => string[];
};
