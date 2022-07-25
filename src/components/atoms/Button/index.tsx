import React from 'react'

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button
