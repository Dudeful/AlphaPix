import React, { useEffect, useState } from 'react';
import { Input } from '../../atoms';
import { Button } from '../../atoms';
import Modal from '../../atoms/Modal/Index';

interface UserData {
	agency?: string;
	accountNumber?: string;
	setAccountNumber: (e: React.FormEvent<HTMLInputElement>) => void;
	setAgency: (e: React.FormEvent<HTMLInputElement>) => void;
	clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
}) => {
	const [showModal, setShowModal] = useState(false)
	const clickHandler= () => setShowModal(prev => !prev)

	return (
		<div>
			<h1>{title}</h1>
			<h3>{subTitle}</h3>
			<Input placeholder="conta"  inputHandler={setAccountNumber} />
			<Input placeholder="agência" inputHandler={setAgency} />
			<Button onClick={clickHandler}>Depositar</Button>
			<Modal showModal={showModal}></Modal>
		</div>
	);
};

export { Account };
