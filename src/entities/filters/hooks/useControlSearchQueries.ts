import { useSearchParams } from 'react-router-dom';
import { SearchParamKeys } from '../types';

type UseSearchQueries = {
  searchParamsString: string;
  updateSearchParam: (paramKey: SearchParamKeys, paramValue: string) => void;
  resetSearchParams: () => void;
};

export const useControlSearchParam = (): UseSearchQueries => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParam = (paramKey: SearchParamKeys, paramValue: string) => {
    setSearchParams(prev => {
      if (paramValue) {
        // 1. Добавление и изменение значения
        prev.set(paramKey, paramValue);
      } else {
        //2. Удаление пустого значения
        prev.delete(paramKey);
      }
      return prev;
    });
  };

  const resetSearchParams = () => {
    setSearchParams({});
  };

  const searchParamsString = searchParams.toString();

  return { searchParamsString, updateSearchParam, resetSearchParams };
};
