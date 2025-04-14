import { useOptionsFilter } from '@/entities/filters/hooks/useOptionsFilter';
import { useControlSearchParam } from '@/entities/filters/hooks/useControlSearchQueries';
import { DropDownFilter } from '@/entities/filters/ui/drop.down.filter/DropDownFilter';
import React from 'react';

export const FiltersGroup = React.memo(() => {
  const { updateSearchParam } = useControlSearchParam();
  const { optionsFilterList } = useOptionsFilter();

  return (
    <>
      {optionsFilterList.map(item => (
        <DropDownFilter
          key={item.label}
          label={item.label}
          selectOption={item.selectOption}
          selectOptionsList={item.selectOptionsList}
          updateSearchParam={updateSearchParam}
        />
      ))}
    </>
  );
});
