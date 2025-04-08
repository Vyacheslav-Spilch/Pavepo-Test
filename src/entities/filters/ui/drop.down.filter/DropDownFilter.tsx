import s from '@/entities/filters/ui/style.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { ChangeEvent } from 'react';
import { FiltersType } from '../../types';
import { setCityQuery, setEmailQuery } from '@/store/slices/slice.filters';

export const DropDownFilter = React.memo(({ label, selectOption, selectOptionsList }: FiltersType) => {
  const dispatch = useAppDispatch();
  const selectOptionName = useAppSelector(selectOption);
  const optionsList = useAppSelector(selectOptionsList);

  const onHandleSelectedOption = (e: ChangeEvent<HTMLSelectElement>) => {
    // В зависимости от установленого поля label для компоненты - делаем dispatch в нужного экшена
    switch (label) {
      case 'Город':
        dispatch(setCityQuery(e.target.value));
        break;
      case 'Почта':
        dispatch(setEmailQuery(e.target.value));
    }
  };

  return (
    <div className={s.box_select}>
      <label>{label}: </label>
      <select className={s.select} value={selectOptionName} onChange={onHandleSelectedOption}>
        {optionsList.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});
