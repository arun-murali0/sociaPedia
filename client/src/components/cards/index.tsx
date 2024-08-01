// card
import { FC, ReactNode } from 'react';

interface CardProp {
  children: ReactNode;
  classname?: string;
}

export const Card: FC<CardProp> = ({ children, classname }) => {
  return <div className={classname}>{children}</div>;
};
