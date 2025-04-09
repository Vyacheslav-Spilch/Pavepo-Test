import { useEffect, useRef, useState } from 'react';
import s from './style.module.scss';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { setResetFilters, setSearchQuery } from '@/store/slices/slice.filters';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectResetFilters } from '@/store/selectors/selectors';

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const selectReset = useAppSelector(selectResetFilters);

  const firstRender = useRef(true);

  const [searchValue, setSearchValue] = useState('');

  if (selectReset) {
    // Проверяем, если selectReset в true, значит вызвана функция сброса фильтров,
    // поэтому сбрасываем локальное состояние, не дожидаясь выполнения useDebounce и затем переводит selectReset в false
    setSearchValue('');
    dispatch(setResetFilters(false));
  }

  const resultSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (resultSearch) {
      dispatch(setSearchQuery(resultSearch));
    } else {
      dispatch(setSearchQuery(''));
    }
  }, [resultSearch, dispatch]);

  return (
    <div className={s.container_input}>
      <input
        className={s.search_input}
        placeholder="Поиск по имени"
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </div>
  );
};
