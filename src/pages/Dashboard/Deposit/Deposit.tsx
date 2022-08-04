import { useContext, useEffect, useState } from 'react';
import { Button, Input } from '../../../components/atoms';
import Dashboard from '../../../components/atoms/Dashboard';
import Modal from '../../../components/atoms/Modal/Index';
import UserContext from '../../../providers/User';
import { getData } from '../../../service/getdata';

export const Deposit = () => {
	const [isActive, setIsActive] = useState(false);
	const [userState, setUserState] = useContext(UserContext);
	const [amount, setAmount] = useState('');
	const [password, setPassword] = useState('');

	const handleDeposit = () => {
		const data = {
			destination: {
				branch: (document.getElementById('deposit_branch') as HTMLInputElement)
					.value,
				account: (
					document.getElementById('deposit_account') as HTMLInputElement
				).value,
			},
			amount,
			password,
		};

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ data }),
		};

		fetch('http://gcp.dudeful.com:5000/register-deposit', options)
			.then((res) => res.json())
			.then((res) => {
				getData(userState[0].cpf).then((data) => {
					setUserState(data);
				});
			})
			.catch((error) => console.error(error));

		setAmount('');
		setPassword('');
		handleCloseModal();
	};
	const handleCloseModal = () => {
		setIsActive((current) => !current);
	};

	console.log(userState[0].branch);

	return (
		<div className="bg-body-light-200 dark:bg-body-dark w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min my-[20px]">
			<Dashboard>Fulano</Dashboard>
			<div className="w-[280px] h-[384] py-[12px] px-[15px] rounded-[8px] bg-white flex flex-col dark:border dark:border-solid dark:border-btn-secondary-base dark:bg-body-dark">
				<div className="flex flex-row gap-[10px]">
					<img src="../src/assets/transj-gold.svg" alt="" />
					<p className="text-header-gold font-medium text-[16px]">Depósito</p>
				</div>

				<p className="font-normal text-[16px] text-paragraph-dark leading-none mt-[15px] dark:text-btn-text">
					Dados para depósito
				</p>
				<div className="flex flex-row mt-[10px] gap-[30px]">
					<div className="flex flex-col">
						<Input
							id="deposit_branch"
							value={userState[0].branch}
							className={'bg-input-readonly text-input-placeholder'}
						></Input>
						<p className="text-[11px] text-input-inactive font-normal leading-none p-[1px]">
							Agência
						</p>
					</div>
					<div>
						<Input
							id="deposit_account"
							value={userState[0].account_number}
							className={'bg-input-readonly text-input-placeholder'}
						></Input>
						<p className="text-[11px] text-input-inactive font-normal leading-none p-[1px]">
							Conta
						</p>
					</div>
				</div>
				<div className="mt-[15px]">
					<Input
						inputHandler={(e: React.FormEvent<HTMLInputElement>) =>
							setAmount(e.currentTarget.value)
						}
						placeholder="Valor"
						type="number"
					></Input>
					<Input
						inputHandler={(e: React.FormEvent<HTMLInputElement>) =>
							setPassword(e.currentTarget.value)
						}
						placeholder="Senha"
						type="password"
						className="mt-[20px]"
					></Input>
					<Button
						className="mt-[15px] bg-btn-primary-base"
						onClick={handleCloseModal}
					>
						Depositar
					</Button>
				</div>
			</div>
			<Modal
				showModal={isActive}
				handleClose={handleCloseModal}
				handleConfirm={handleDeposit}
			></Modal>
		</div>
	);
};
