import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input/index';

export const Register = () => {
	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [name, setName] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [email, setEmail] = useState('');

	let navigate = useNavigate();

	const handleRegister = () => {
		if (password !== confirmPassword) {
			alert('As duas senhas devem ser iguais!');
			return;
		}

		const data = {
			cpf,
			password,
			name,
			birthdate,
			email,
		};

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ data }),
		};

		fetch('http://gcp.dudeful.com:5000/register-user', options)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.error(error));

		navigate('/login', { replace: true });
	};

	return (
		<div className="bg-body-light-200 dark:bg-body-dark w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min my-[20px]">
			<img src="./src/assets/logo.svg" alt="" className="w-[100px] mt-[38px]" />
			<p className="mt-[10px] text-[20px] font-medium text-paragraph-dark dark:text-btn-text">
				Crie sua conta
			</p>
			<form
				action=""
				className="w-[250px] flex items-center gap-[20px] flex-col my-[10px]"
			>
				<Input
					inputHandler={(e: React.FormEvent<HTMLInputElement>) => {
						setName(e.currentTarget.value);
					}}
					type="text"
					placeholder="Digite seu Nome"
				/>
				<Input
					inputHandler={(e: React.FormEvent<HTMLInputElement>) => {
						const date = new Date(e.currentTarget.value);
						const bdate = date.toISOString().split('T')[0];
						setBirthdate(bdate);
					}}
					type="text"
					placeholder="Digite sua data de nascimento"
				/>
				<Input
					inputHandler={(e: React.FormEvent<HTMLInputElement>) => {
						setCpf(e.currentTarget.value);
					}}
					type="text"
					placeholder="Digite seu CPF"
				/>
				<Input
					inputHandler={(e: React.FormEvent<HTMLInputElement>) => {
						setEmail(e.currentTarget.value);
					}}
					type="email"
					placeholder="Digite seu Email"
				/>
				<Input
					inputHandler={(e: React.FormEvent<HTMLInputElement>) => {
						setPassword(e.currentTarget.value);
					}}
					type="password"
					placeholder="Digite sua senha"
				/>
				<Input
					inputHandler={(e: React.FormEvent<HTMLInputElement>) => {
						setConfirmPassword(e.currentTarget.value);
					}}
					type="password"
					placeholder="Confirme sua senha"
				/>
				<Button type="button" onClick={handleRegister}>
					Cadastrar
				</Button>
			</form>
			<Link
				className="font-normal text-[14px] text-paragraph-dark dark:text-paragraph-light-100"
				to={'/login'}
			>
				Entrar
			</Link>
		</div>
	);
};
