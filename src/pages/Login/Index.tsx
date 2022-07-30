import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../components/atoms';
import { UserContext } from '../../providers/User';

export const Login = () => {
	const handleLogin = () => {
		console.log('entrou');
	};
	const user = useContext(UserContext)
	console.log(user)
	return (
		<div className="bg-body-light-200 dark:bg-body-dark w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min my-[20px]">
			<img className="w-32 h-fit mt-20" src="./src/assets/logo.svg" alt="" />
			<p className="mt-12 mb-3 text-xl font-medium text-paragraph-dark dark:text-btn-text">
				Login
			</p>
			<form className="w-64 flex flex-col items-center gap-5 mb-3" action="">
				<Input placeholder="Digite seu CPF" type="text" />
				<Input placeholder="Digite sua senha" type="password" />
				<Button type="button" onClick={handleLogin}>
					Entrar
				</Button>
			</form>
			<Link
				className="font-normal text-sm text-paragraph-dark dark:text-paragraph-light-100"
				to={'/register'}
			>
				Crie sua conta
			</Link>
		</div>
	);
};
