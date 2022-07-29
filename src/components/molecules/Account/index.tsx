import React, { useEffect, useState } from 'react';
import { Input } from '../../atoms';
import { Button } from '../../atoms';

interface UserData {
	agency?: string;
	accountNumber?: string;
	setAccountNumber: (e: React.FormEvent<HTMLInputElement>) => void;
	setAgency: (e: React.FormEvent<HTMLInputElement>) => void;
	makeDeposit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface Titles {
	title?: string;
	subTitle: string;
}

const Account: React.FC<UserData & Titles> = ({
	title,
	subTitle,
	setAccountNumber,
	setAgency,
	makeDeposit,
}) => {
	return (
		<div>
			<h1>{title}</h1>
			<h3>{subTitle}</h3>
			<Input placeholder="conta"  inputHandler={setAccountNumber} />
			<Input placeholder="agência" inputHandler={setAgency} />
			<Button onClick={makeDeposit}>Depositar</Button>
		</div>
	);
};

export { Account };
