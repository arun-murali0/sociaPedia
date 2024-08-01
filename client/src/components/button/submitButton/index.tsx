// button component

import { ReactNode, FC } from 'react';

// type
interface ButtonProps {
  children: ReactNode;
  onSubmit?: () => void;
  classname?: string;
}

export const ButtonSubmit: FC<ButtonProps> = ({ children, onSubmit, classname }) => {
  return (
    <button onClick={onSubmit} className={classname}>
      {children}
    </button>
  );
};
