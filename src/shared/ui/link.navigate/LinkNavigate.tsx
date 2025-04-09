import { Link } from 'react-router-dom';
import s from './style.module.scss';
import { Routers } from '@/app/routers/routers';
import { icons } from 'lucide-react';

export type LucideIconsName = keyof typeof icons;

interface Props {
  text: string;
  route: keyof typeof Routers;
  iconName: LucideIconsName;
}

const LinkNavigate = ({ text, route, iconName }: Props) => {
  const IconComponent = icons[iconName];

  return (
    <Link className={s.link_box} to={Routers[route]}>
      <IconComponent size={20} className={s.link_icon} />
      {text}
    </Link>
  );
};

export default LinkNavigate;
