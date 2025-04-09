import Button from '@/shared/ui/button/Button';
import { selectCityQuery, selectEmailQuery, selectSearchQuery } from '@/store/selectors/selectors';
import { setCityQuery, setEmailQuery, setResetFilters, setSearchQuery } from '@/store/slices/slice.filters';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ResetFilters = () => {
  const dispatch = useAppDispatch();
  const selectName = useAppSelector(selectSearchQuery);
  const selectCity = useAppSelector(selectCityQuery);
  const selectEmail = useAppSelector(selectEmailQuery);

  const isDisabled = !selectName && selectCity === 'Все' && selectEmail === 'Все';

  const onHandleResetFilters = () => {
    dispatch(setSearchQuery(''));
    dispatch(setCityQuery('Все'));
    dispatch(setEmailQuery('Все'));
    dispatch(setResetFilters(true));
  };

  return (
    <div>
      <Button
        onClick={onHandleResetFilters}
        disabled={isDisabled}
        text="Сбросить фильтры"
        variant="medium"
        color="secondary"
        iconName="Eraser"
      />
    </div>
  );
};
