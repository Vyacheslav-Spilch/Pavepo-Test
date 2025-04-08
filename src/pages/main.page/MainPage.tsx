import SearchPanel from '@/widgets/search.panel/SearchPanel';
import s from './style.module.css';
import UsersList from '@/widgets/users.list/UsersList';
// import { useScrollToTop } from '@/shared/hooks/useScrollToTop';

const MainPage = () => {
  return (
    <div className={s.container}>
      <SearchPanel />
      <UsersList />
    </div>
  );
};

export default MainPage;
