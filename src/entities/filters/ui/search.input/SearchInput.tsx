import { useEffect, useState } from 'react';
import s from './style.module.css';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { setSearchQuery } from '@/store/slices/slice.filters';
import { useAppDispatch } from '@/store/store';

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');

  const resultSearch = useDebounce(searchValue, 1000);

  useEffect(() => {
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
