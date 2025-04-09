import { ButtonHTMLAttributes } from 'react';
import s from './style.module.scss';
import './options.scss';
import { LucideIconsName } from '../link.navigate/LinkNavigate';
import { icons } from 'lucide-react';

type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonColors = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonSizes;
  color?: ButtonColors;
  text: string;
  iconName?: LucideIconsName;
}

const Button = ({ variant = 'medium', color = 'primary', text, iconName, ...props }: Props) => {
  const IconComponent = iconName && icons[iconName];
  const classButton = `${s.btn} ${variant} ${color}`;
  const classIcon = `${s.icon} ${color}`;

  return (
    <button className={classButton} {...props}>
      {IconComponent && <IconComponent size={20} className={classIcon} />}
      {text}
    </button>
  );
};

export default Button;
