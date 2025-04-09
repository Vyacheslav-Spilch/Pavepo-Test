import s from './style.module.scss';
import { Spinner } from '@/assets/spinner';

type SpinnerVariant = 'small' | 'normal' | 'medium' | 'large';

interface Props {
  message?: string;
  variant?: SpinnerVariant;
}

type DimensionsSpinner = Record<SpinnerVariant, string>;

const dimensionsSpinner: DimensionsSpinner = {
  small: '50',
  normal: '100',
  medium: '150',
  large: '200',
};

const ContentLoader = ({ message = 'Загрузка', variant = 'medium' }: Props) => {
  return (
    <div className={s.box_loader}>
      <Spinner width={dimensionsSpinner[variant]} height={dimensionsSpinner[variant]} />
      <span>{message}</span>
    </div>
  );
};

export default ContentLoader;
