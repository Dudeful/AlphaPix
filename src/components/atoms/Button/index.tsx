import React from 'react';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  classNames?: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ type, onClick, children, classNames }) => {
  return (
    <button
      className="w-full p-2.5 bg-btn-primary-base border-0 font-normal text-lg text-white rounded-md"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
