import React from 'react';
import './styles.css';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  classNames?: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ type, onClick, children, classNames }) => {
  return (
    <button className={classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
