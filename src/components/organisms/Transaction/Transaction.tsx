import React, { useContext } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

interface ITransactionProps {
	title: React.ReactNode;
	origin?: React.ReactNode;
	destination?: React.ReactNode;
	value: React.ReactNode;
	password: React.ReactNode;
	buttonText: string;
}

const Transaction: React.FC<ITransactionProps> = ({
	title,
	origin,
	destination,
	buttonText,
}) => {
	const handleClick = async () => {
		const res: any = await axios.get(
			'https://rickandmortyapi.com/api/character/1'
		);
	};

	return (
		<div className="flex flex-col justify-between min-h-[60%] w-fit p-6">
			{title}
			{origin}
			{destination}
			<Input
				classNames="h-[40px] mb-2 p-3 text-[18px]"
				placeholder={'Valor'}
				type={'number'}
			/>
			<Input
				classNames="h-[40px] mb-2 p-3 text-[18px]"
				placeholder={'Senha'}
				type={'password'}
			/>
			<Button
				classNames="bg-sky-200 h-[40px] mt-3"
				type="button"
				children={buttonText}
				onClick={handleClick}
			/>
		</div>
	);
};

export default Transaction;
