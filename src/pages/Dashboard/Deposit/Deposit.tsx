import { useState } from 'react';
import { Button, Input } from '../../../components/atoms';
import Dashboard from '../../../components/atoms/Dashboard';
import Modal from '../../../components/atoms/Modal/Index';

export const Deposit = () => {
	const [isActive, setIsActive] = useState(false);

	const handleDeposit = () => {
		const data = {
			destination: {
				branch: (document.getElementById('deposit_branch') as HTMLInputElement)
					.value,
				account: (
					document.getElementById('deposit_account') as HTMLInputElement
				).value,
			},
			amount: (document.getElementById('deposit_amount') as HTMLInputElement)
				.value,
			password: (
				document.getElementById('deposit_password') as HTMLInputElement
			).value,
		};

		console.log(data);

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ data }),
		};

		fetch('http://gcp.dudeful.com:5000/register-transfer', options);

		setIsActive((current) => !current);
	};
	const handleCloseModal = () => {
		setIsActive((current) => !current);
	};

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
							value="1510-5"
							className={'bg-input-readonly text-input-placeholder'}
						></Input>
						<p className="text-[11px] text-input-inactive font-normal leading-none p-[1px]">
							Agência
						</p>
					</div>
					<div>
						<Input
							id="deposit_account"
							value="95785-3"
							className={'bg-input-readonly text-input-placeholder'}
						></Input>
						<p className="text-[11px] text-input-inactive font-normal leading-none p-[1px]">
							Conta
						</p>
					</div>
				</div>
				<div className="mt-[15px]">
					<Input id="deposit_amount" placeholder="Valor" type="number"></Input>
					<Input
						id="deposit_password"
						placeholder="Senha"
						type="password"
						className="mt-[20px]"
					></Input>
					<Button
						className="mt-[15px] bg-btn-primary-base"
						onClick={handleDeposit}
					>
						Depositar
					</Button>
				</div>
			</div>
			<Modal showModal={isActive} handleClose={handleCloseModal}></Modal>
		</div>
	);
};
