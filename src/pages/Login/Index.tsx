import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components/atoms';
import { getData } from '../../service/getdata';
import UserContext from '../../providers/User';

export const Login = () => {
	const [userState, setUserState] = useContext(UserContext);
	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	const handleLogin = () => {
		navigate('/deposit', { replace: true });
	};
	const passwordHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const cpfHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setCpf(e.currentTarget.value);
	};

	useEffect(() => {
		const password = (
			document.getElementById('login_password') as HTMLInputElement
		).value;
		getData(cpf).then((data) => {
			data[0].password = password;
			setUserState(data);
		});
	}, [cpf, password]);
	return (
		<div className="bg-body-light-200 dark:bg-body-dark w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min my-[20px]">
			<img className="w-32 h-fit mt-20" src="./src/assets/logo.svg" alt="" />
			<p className="mt-12 mb-3 text-xl font-medium text-paragraph-dark dark:text-btn-text">
				Login
			</p>
			<form className="w-64 flex flex-col items-center gap-5 mb-3" action="">
				<Input
					id="login_cpf"
					placeholder="Digite seu CPF"
					type="text"
					inputHandler={cpfHandler}
				/>
				<Input
					id="login_password"
					placeholder="Digite sua senha"
					type="password"
					inputHandler={passwordHandler}
				/>
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
