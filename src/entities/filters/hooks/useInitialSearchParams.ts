import { FiltersStateType } from '@/store/slices/slice.filters';
import { useSearchParams } from 'react-router-dom';

type inititalSearchParams = {
  inititalSearchParams: null | Partial<Omit<FiltersStateType, 'resetFilters'>>;
};

export const useInitialSearchParams = (firstRender: boolean): inititalSearchParams => {
  const [searchParams] = useSearchParams();
  let inititalSearchParams = null;
  if (!searchParams.size || !firstRender) return { inititalSearchParams };
  inititalSearchParams = Object.fromEntries(searchParams.entries());
  return { inititalSearchParams };
};
