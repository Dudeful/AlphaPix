import React from 'react';
import './button.css';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
