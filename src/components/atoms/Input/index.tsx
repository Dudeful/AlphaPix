import React from 'react';
import './styles.css';

interface IInputRegisterProps {
  classNames?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  readOnly?: boolean;
}

const Input: React.FC<IInputRegisterProps> = ({
  type,
  value,
  placeholder,
  classNames,
  readOnly,
}) => {
  return (
    <input
      className={classNames}
      type={type}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
    />
  );
};

export default Input;
