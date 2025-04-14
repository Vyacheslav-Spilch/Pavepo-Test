import s from '@/entities/filters/ui/style.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { ChangeEvent, useEffect } from 'react';
import { FiltersType, SearchParamKeys } from '../../types';
import { setCityQuery, setEmailQuery } from '@/store/slices/slice.filters';

interface Props extends FiltersType {
  updateSearchParam: (paramKey: SearchParamKeys, paramValue: string) => void;
}

export const DropDownFilter = React.memo(({ label, selectOption, selectOptionsList, updateSearchParam }: Props) => {
  const dispatch = useAppDispatch();
  const selectName = useAppSelector(selectOption);
  const optionsList = useAppSelector(selectOptionsList);

  useEffect(() => {
    // При монтировании компонента - синхронизируем значения из store с query параметрами url
    switch (label) {
      case 'Город': {
        updateSearchParam('cityQuery', selectName);
        break;
      }
      case 'Почта': {
        updateSearchParam('emailQuery', selectName);
        break;
      }
    }
  }, []);

  const onHandleSelectedOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // В зависимости от установленого поля label для компоненты - делаем dispatch в нужного экшена
    // Также добавляем значение фильтра SearchParam для url
    switch (label) {
      case 'Город':
        updateSearchParam('cityQuery', value);
        dispatch(setCityQuery(value));
        break;
      case 'Почта':
        updateSearchParam('emailQuery', value);
        dispatch(setEmailQuery(value));
        break;
    }
  };

  return (
    <div className={s.box_select}>
      <label>{label}: </label>
      <select className={s.select} value={selectName} onChange={onHandleSelectedOption}>
        {optionsList.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});
