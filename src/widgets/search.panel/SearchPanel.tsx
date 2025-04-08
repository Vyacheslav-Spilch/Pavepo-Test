import { SearchInput } from '@/entities/filters/ui/search.input/SearchInput';
import s from './style.module.css';
import { DropDownFilter } from '@/entities/filters/ui/drop.down.filter/DropDownFilter';
import { useOptionsFilter } from '@/entities/filters/hooks/useOptionsFilter';

const SearchPanel = () => {
  const { optionsFilterList } = useOptionsFilter();

  return (
    <header className={s.container_search_panel}>
      <SearchInput />
      {optionsFilterList.map(item => (
        <DropDownFilter
          key={item.label}
          label={item.label}
          selectOption={item.selectOption}
          selectOptionsList={item.selectOptionsList}
        />
      ))}
    </header>
  );
};

export default SearchPanel;
