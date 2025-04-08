import { useEffect, useState } from 'react';

export const useDebounce = (searchTerm: string, delay: number) => {
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult(searchTerm);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, delay]);

  return searchResult;
};
