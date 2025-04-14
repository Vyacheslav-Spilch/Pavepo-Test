import { useEffect, useRef, useState } from 'react';
import s from './style.module.scss';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { setResetFilter, setSearchQuery } from '@/store/slices/slice.filters';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectNameQuery, selectResetFilters } from '@/store/selectors/selectors';
import { useControlSearchParam } from '../../hooks/useControlSearchQueries';
import { useInitialSearchParams } from '../../hooks/useInitialSearchParams';

export const SearchInput = () => {
  const firstRender = useRef(true);

  const dispatch = useAppDispatch();
  const selectReset = useAppSelector(selectResetFilters);
  const nameQuery = useAppSelector(selectNameQuery);
  const { updateSearchParam } = useControlSearchParam();
  const { inititalSearchParams } = useInitialSearchParams(firstRender.current);

  const [searchValue, setSearchValue] = useState(nameQuery);

  const resultSearch = useDebounce(searchValue, 1000);

  if (selectReset) {
    // Проверяем, если selectReset в true, значит вызвана функция сброса фильтров,
    // поэтому сбрасываем локальное состояние, не дожидаясь выполнения useDebounce и затем переводит selectReset в false
    setSearchValue('');
    dispatch(setResetFilter(false));
  }

  console.log('Render SearchInput');

  useEffect(() => {
    if (firstRender.current) {
      setSearchValue(inititalSearchParams?.nameQuery || nameQuery);
      firstRender.current = false;
      return;
    }
    if (resultSearch) {
      dispatch(setSearchQuery(resultSearch));
      updateSearchParam('nameQuery', resultSearch);
    } else {
      dispatch(setSearchQuery(''));
      updateSearchParam('nameQuery', '');
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
