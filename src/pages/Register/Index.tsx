import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input/index';

export const Register = () => {
	const handleRegister = () => {
		console.log('entrou');
	};

	return (
		<div className="bg-body-light-200 w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min">
			<img src="./src/assets/logo.svg" alt="" className="w-[100px] mt-[38px]" />
			<p className="mt-[10px] text-[20px] font-medium text-paragraph-dark">
				Crie sua conta
			</p>
			<form
				action=""
				className="w-[250px] flex items-center gap-[20px] flex-col my-[10px]"
			>
				<Input type="text" placeholder="Digite seu Nome" />
				<Input type="text" placeholder="Digite sua data de nascimento" />
				<Input type="text" placeholder="Digite seu CPF" />
				<Input type="email" placeholder="Digite seu Email" />
				<Input type="password" placeholder="Digite sua senha" />
				<Input type="password" placeholder="Confirme sua senha" />
				<Button type="button" onClick={handleRegister}>
					Cadastrar
				</Button>
			</form>
			<Link
				className="font-normal text-[14px] text-paragraph-dark"
				to={'/login'}
			>
				Entrar
			</Link>
		</div>
	);
};
