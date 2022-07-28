import React from 'react';
import './styles.css';

interface IInputRegisterProps {
	placeholder: string;
	type?: string;
	inputHandler: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputRegisterProps> = ({ type, placeholder, inputHandler }) => {
	return <input type={type} 
	placeholder={placeholder}
	onInput={inputHandler}
	/>;
};

export default Input;