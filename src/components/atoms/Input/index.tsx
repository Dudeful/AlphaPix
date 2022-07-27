import React from 'react';
import './styles.css';

interface IInputRegisterProps {
	placeholder: string;
	value?: string;
	type?: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputRegisterProps> = ({ type, value, placeholder }) => {
	return <input type={type} placeholder={placeholder} value={value} />;
};

export default Input;
