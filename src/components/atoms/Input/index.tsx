import React from 'react';

interface IInputRegisterProps {
	placeholder?: string;
	value?: string;
	type?: string;
	inputHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
	className?: string;
	id?: string;
}

const Input: React.FC<IInputRegisterProps> = ({
	type,
	placeholder,
	inputHandler,
	className,
	value,
	id,
}) => {
	return (
		<input
			id={id}
			className={`${className} w-full h-8 p-2.5 rounded-md text-base font-normal border border-solid border-input-border`}
			type={type}
			placeholder={placeholder}
			onInput={inputHandler}
			value={value}
			onChange={() => console.log('')}
		/>
	);
};

export default Input;
