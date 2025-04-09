import LinkNavigate from '@/shared/ui/link.navigate/LinkNavigate';
import s from './style.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.not_fount}>
      <LinkNavigate text="На главную" route={'MAIN'} iconName={'ArrowLeft'} />
      <h2>Страница не найдена 404</h2>
    </div>
  );
};

export default NotFoundPage;
