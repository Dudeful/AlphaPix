import React from 'react';

interface IInputRegisterProps {
  placeholder: string;
  value?: string;
  type?: string;
}

const Input: React.FC<IInputRegisterProps> = ({ type, value, placeholder }) => {
  return (
    <input
      className="w-full h-8 p-2.5 rounded-md text-base font-normal border border-solid border-neutral-300"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
