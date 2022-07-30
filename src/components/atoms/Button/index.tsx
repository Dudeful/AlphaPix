import React from 'react';

interface IButtonProps {
	type?: 'button' | 'submit' | 'reset';
	children: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

const Button: React.FC<IButtonProps> = ({
	className = 'bg-btn-primary-base',
	type,
	onClick,
	children,
}) => {
	return (
		<button
			className={`${className} w-full p-2.5 border-0 font-normal text-lg text-white rounded-md`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
