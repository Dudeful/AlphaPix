import { useContext, useState } from 'react';
import Button from '../../../components/atoms/Button';
import Dashboard from '../../../components/atoms/Dashboard';
import Input from '../../../components/atoms/Input';
import Modal from '../../../components/atoms/Modal/Index';
import UserContext from '../../../providers/User';
import { getData } from '../../../service/getdata';

export const Withdraw = () => {
	const [isActive, setIsActive] = useState(false);
	const [userState, setUserState] = useContext(UserContext);
	const [amount, setAmount] = useState('');
	const [password, setPassword] = useState('');

	const data = {
		origin: {
			branch: userState[0].branch,
			account: userState[0].account_number,
		},
		amount,
		password,
	};

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ data }),
	};

	const handleWithdraw = () => {
		fetch('http://gcp.dudeful.com:5000/register-withdraw', options)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				getData(userState[0].cpf).then((data) => {
					data[0].password = userState[0].password;
					setUserState(data);
				});

				setAmount('');
				setPassword('');
				handleCloseModal();
			})
			.catch((error) => console.error(error));
	};
	const handleCloseModal = () => {
		setIsActive((current) => !current);
	};

	return (
		<div className="bg-body-light-200 dark:bg-body-dark w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min my-[20px]">
			<Dashboard>{userState[0].name}</Dashboard>
			<div className="w-[280px] h-[384] py-[12px] px-[15px] rounded-[8px] bg-white flex flex-col dark:border dark:border-solid dark:border-btn-secondary-base dark:bg-body-dark">
				<div className="flex flex-row gap-[10px]">
					<img src="../src/assets/withdraw-gold.svg" alt="" />
					<p className="text-header-gold font-medium text-[16px]">Saque</p>
				</div>
				<p className="font-normal text-[16px] text-paragraph-dark leading-none mt-[15px] dark:text-btn-text">
					Dados para saque
				</p>
				<div className="flex flex-row mt-[10px] gap-[30px]">
					<div className="flex flex-col">
						<Input
							value={userState[0].branch}
							className={'bg-input-readonly text-input-placeholder'}
						></Input>
						<p className="text-[11px] text-input-inactive font-normal leading-none p-[1px]">
							Agência
						</p>
					</div>
					<div>
						<Input
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
						value={amount}
						inputHandler={(e: React.FormEvent<HTMLInputElement>) =>
							setAmount(e.currentTarget.value)
						}
						id="deposit_amount"
						placeholder="Valor"
						type="number"
					></Input>
					<Input
						value={password}
						id="deposit_password"
						placeholder="Senha"
						type="password"
						className="mt-[20px]"
						inputHandler={(e: React.FormEvent<HTMLInputElement>) =>
							setPassword(e.currentTarget.value)
						}
					></Input>
					<Button
						onClick={handleCloseModal}
						className="mt-[15px] bg-btn-primary-base"
					>
						Sacar
					</Button>
				</div>
			</div>
			<Modal
				showModal={isActive}
				handleClose={handleCloseModal}
				handleConfirm={handleWithdraw}
			></Modal>
		</div>
	);
};
