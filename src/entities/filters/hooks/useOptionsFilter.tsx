import { FiltersType } from '../types';
import { selectCityQuery, selectEmailQuery, selectOptionsCity, selectOptionsEmail } from '@/store/selectors/selectors';

import { useMemo } from 'react';

export const useOptionsFilter = () => {
  // Хук предназначен для создания списка фильтров для компоненты DropDownFilter,
  // это позволит в будущем легко переиспользовать компонент DropDownFilter, в случаи,
  // если появится необходимость добавить другие фильтры

  const optionsFilterList: FiltersType[] = useMemo(() => {
    return [
      {
        label: 'Город',
        selectOption: selectCityQuery,
        selectOptionsList: selectOptionsCity,
      },
      {
        label: 'Почта',
        selectOption: selectEmailQuery,
        selectOptionsList: selectOptionsEmail,
      },
    ];
  }, []);
  return { optionsFilterList };
};
