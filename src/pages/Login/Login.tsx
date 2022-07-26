import { Link } from 'react-router-dom';
import { Button, Input } from '../../components/atoms';

export const Login = () => {
  const handleLogin = () => {
    console.log('entrou');
  };

  return (
    <div className="bg-body-light-200 w-sm h-sm flex flex-col justify-start items-center mx-auto my-5">
      <img className="w-32 h-fit mt-20" src="./src/assets/logo.svg" alt="" />
      <p className="mt-12 mb-3 text-xl font-medium">Login</p>
      <form className="w-64 flex flex-col items-center gap-5 mb-3" action="">
        <Input placeholder="Digite seu CPF" type="text" />
        <Input placeholder="Digite sua senha" type="password" />
        <Button type="button" onClick={handleLogin}>
          Entrar
        </Button>
      </form>
      <Link to={'/register'}>Crie sua conta</Link>
    </div>
  );
};
