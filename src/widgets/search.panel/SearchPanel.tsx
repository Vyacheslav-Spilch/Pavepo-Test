import { SearchInput } from '@/entities/filters/ui/search.input/SearchInput';
import s from './style.module.scss';
import { ResetFilters } from '@/entities/filters/ui/reset.filters/ResetFilters';
import { FiltersGroup } from '../filters.group/FiltersGroup';
import { useAppDispatch } from '@/store/store';
import { useEffect, useRef } from 'react';
import { setInitialQueryParams } from '@/store/slices/slice.filters';
import { useInitialSearchParams } from '@/entities/filters/hooks/useInitialSearchParams';

const SearchPanel = () => {
  const firstRender = useRef(true);
  const { inititalSearchParams } = useInitialSearchParams(firstRender.current);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inititalSearchParams) {
      dispatch(setInitialQueryParams(inititalSearchParams));
    }
    firstRender.current = false;
  }, []);

  return (
    <header className={s.container_search_panel}>
      <SearchInput />
      <FiltersGroup />
      <ResetFilters />
    </header>
  );
};

export default SearchPanel;
