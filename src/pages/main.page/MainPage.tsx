import SearchPanel from '@/widgets/search.panel/SearchPanel';
import s from './style.module.scss';
import UsersList from '@/widgets/users.list/UsersList';

const MainPage = () => {

  return (
    <div className={s.container}>
      <SearchPanel />
      <UsersList />
    </div>
  );
};

export default MainPage;
