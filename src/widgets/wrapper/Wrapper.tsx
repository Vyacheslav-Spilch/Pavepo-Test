import { FC, PropsWithChildren } from 'react';
import s from './style.module.scss';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <main className={s.wrapper}>{children}</main>;
};
