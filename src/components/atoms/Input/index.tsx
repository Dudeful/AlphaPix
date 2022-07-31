import React from 'react';

interface IInputRegisterProps {
	placeholder?: string;
	value?: string;
	type?: string;
	inputHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
	className?: string;
}

const Input: React.FC<IInputRegisterProps> = ({
	type,
	placeholder,
	inputHandler,
	className,
	value,
}) => {
	return (
		<input
			className={`${className} w-full h-8 p-2.5 rounded-md text-base font-normal border border-solid border-input-border`}
			type={type}
			placeholder={placeholder}
			onInput={inputHandler}
			value={value}
		/>
	);
};

export default Input;
