import Button from '@/shared/ui/button/Button';
import { selectCityQuery, selectEmailQuery, selectNameQuery } from '@/store/selectors/selectors';
import { setResetFilter, setResetFilters } from '@/store/slices/slice.filters';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useControlSearchParam } from '../../hooks/useControlSearchQueries';

export const ResetFilters = () => {
  const dispatch = useAppDispatch();
  const selectName = useAppSelector(selectNameQuery);
  const selectCity = useAppSelector(selectCityQuery);
  const selectEmail = useAppSelector(selectEmailQuery);
  const { resetSearchParams } = useControlSearchParam();

  const isDisabled = !selectName && selectCity === 'Все' && selectEmail === 'Все';

  const onHandleResetFilters = () => {
    dispatch(setResetFilters());
    dispatch(setResetFilter(true));
    resetSearchParams();
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
