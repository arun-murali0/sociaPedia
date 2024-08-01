// button component

import { ReactNode, FC } from 'react';

// type
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  classname?: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, classname }) => {
  return (
    <button onClick={onClick} className={classname}>
      {children}
    </button>
  );
};
