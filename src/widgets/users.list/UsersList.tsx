import { UserCard } from '@/entities/user/ui/user.card/UserCard';
import s from './style.module.css';

import React, { useMemo } from 'react';
import { useAppSelector } from '@/store/store';
import { selectCityQuery, selectEmailQuery, selectSearchQuery } from '@/store/selectors/selectors';
import { useGetUsersQuery } from '@/api/users.api';
import ContentLoader from '@/shared/ui/ContentLoader';

export const UsersList = React.memo(() => {
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();

  const selectName = useAppSelector(selectSearchQuery);
  const selectCity = useAppSelector(selectCityQuery);
  const selectEmail = useAppSelector(selectEmailQuery);

  // Здесь мы производим фильтрацию с применением выбранных значений,
  // а также с помощью useMemo обеспечиваем кэшированние данных, тем самым предотвращая лишние вычисления,
  // в случаи если массив зависимостей не изменился

  const filteredUsers = useMemo(() => {
    return users?.filter(user => {
      const cityMatch = selectCity === 'Все' || user.address.city === selectCity;
      const nameMatch = selectName === '' || user.name.toLowerCase().includes(selectName.toLowerCase());
      const emailMatch = selectEmail === 'Все' || user.email === selectEmail;
      return nameMatch && cityMatch && emailMatch;
    });
  }, [users, selectCity, selectName, selectEmail]);

  return (
    <section className={s.users_list}>
      {isLoadingUsers && <ContentLoader message="Загрузка пользователей..." variant="large" />}
      {filteredUsers &&
        filteredUsers.map(user => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} city={user.address.city} />
        ))}
    </section>
  );
});

export default UsersList;
