import React from 'react';
import './inputRegister.css';

interface IInputRegisterProps {
  placeholder: string;
  value: string;
  type?: string;
}

export const InputRegister: React.FC<IInputRegisterProps> = ({
  type,
  value,
  placeholder,
}) => {
  return <input type={type} placeholder={placeholder} value={value} />;
};
