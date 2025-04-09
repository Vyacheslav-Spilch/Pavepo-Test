import { Link } from 'react-router-dom';
import s from './style.module.scss';
import { Routers } from '@/app/routers/routers';

interface Props {
  id: number;
  name: string;
  email: string;
  city: string;
}

export const UserCard = ({ id, name, email, city }: Props) => {
  return (
    <Link className={s.card_link} to={`${Routers.USER}/${id}`}>
      <div className={s.card_box}>
        <h3>{name}</h3>
        <span>Город: {city}</span>
        <span>Почта: {email}</span>
      </div>
    </Link>
  );
};
