// button component

import { ReactNode, FC } from 'react';

// type
interface ButtonProps {
  children: ReactNode;
  onClick?: () => boolean | void;
  classname?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  classname,
  type,
}) => {
  return (
    <button onClick={onClick} className={classname} type={type}>
      {children}
    </button>
  );
};
