import React from 'react'
import './inputRegister.css'

interface IInputRegisterProps {
  placeholder: string
  value?: string
  type?: string
}

 const Input: React.FC<IInputRegisterProps> = ({
  type,
  value,
  placeholder,
}) => {
  return <input type={type} placeholder={placeholder} value={value} />
};

export default Input