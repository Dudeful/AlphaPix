import React, { useEffect, useState } from 'react';
import { Input } from '../../atoms';
import { Button } from '../../atoms';

interface UserData {
	agency?: string;
	accountNumber?: string;
	getAccountNumber: (e: React.FormEvent<HTMLInputElement>) => void;
	getAgency: (e: React.FormEvent<HTMLInputElement>) => void;
	makeDeposit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface Titles {
	title?: string;
	subTitle: string;
}

const Account: React.FC<UserData & Titles> = ({
	accountNumber,
	agency,
	title,
	subTitle,
	getAccountNumber,
	getAgency,
	makeDeposit,
}) => {
	return (
		<div>
			{title}
			{subTitle}
			<Input placeholder="" value={accountNumber} onChange={getAccountNumber} />
			<Input placeholder="" value={agency} onChange={getAgency} />
			<Button onClick={makeDeposit}>Depositar</Button>
		</div>
	);
};

export { Account };
