import { RootStateType } from '@/store/store';

export type FiltersType = {
  label: 'Город' | 'Почта';
  selectOption: ({ filters }: RootStateType) => string;
  selectOptionsList: ({ options }: RootStateType) => string[];
};
