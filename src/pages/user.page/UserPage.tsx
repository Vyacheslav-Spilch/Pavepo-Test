import { useGetUserByIdQuery } from '@/api/users.api';
import { Routers } from '@/app/routers/routers';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import s from './style.module.css';
import ContentLoader from '@/shared/ui/ContentLoader';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = Number(id);
  // Добавляем skipToken для отмены запроса, если userId нет
  const { data: user, isSuccess, isLoading: isLoadingUser, error } = useGetUserByIdQuery(userId ?? skipToken);

  const isSuccessLoadedUser = user && isSuccess;

  useEffect(() => {
    // Делаем редирект на страницу NotFountPage, если user по id не найден
    if (!user && error) {
      navigate(Routers.NOT_FOUNT_PAGE);
    }
  }, [user, error, navigate]);

  console.log(user);

  return (
    <section className={s.container}>
      {isLoadingUser && <ContentLoader message="Загружаем информацию о пользователе..." variant="medium" />}
      {isSuccessLoadedUser && (
        <div className={s.box_info}>
          <header>
            <span>Информация о пользователе</span>
          </header>
          <ul>
            <li>
              Никнейм - <strong>{user.username}</strong>
            </li>
            <li>
              Имя - <strong>{user.name}</strong>
            </li>
            <li>
              Телефон - <strong>{user.phone}</strong>
            </li>
            <li>
              Почта - <strong>{user.email}</strong>
            </li>
            <li>
              Компания - <strong>{user.company.name}</strong>
            </li>
            <li>
              Адрес - <strong>{user.address.city}</strong>
            </li>
            <li>
              Веб-сайт - <strong>{user.website}</strong>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default UserPage;
