import React from 'react';
import './styles.css';

interface IInputRegisterProps {
	placeholder: string;
	type?: string;
	inputHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputRegisterProps> = ({
	type,
	placeholder,
	inputHandler,
}) => {
	return (
		<input
			className="w-full h-8 p-2.5 rounded-md text-base font-normal border border-solid border-neutral-300"
			type={type}
			placeholder={placeholder}
			onInput={inputHandler}
		/>
	);
};

export default Input;
