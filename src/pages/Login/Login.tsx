import { Link } from 'react-router-dom';
import { Button, Input } from '../../components/atoms';
import './styles.css';

export const Login = () => {
  const handleLogin = () => {
    console.log('entrou');
  };

  return (
    <div className="login-page container">
      <img className="logo" src="./src/assets/logo.svg" alt="" />
      <p className="title">Login</p>
      <form className="form" action="">
        <Input placeholder="Digite seu CPF" type="text" />
        <Input placeholder="Digite sua senha" type="password" />
        <Button type="button" onClick={handleLogin}>
          {/* Entrar */}
          <Link to={'/transaction'}>Entrar</Link>
        </Button>
      </form>
      <Link to={'/register'}>Crie sua conta</Link>
    </div>
  );
};
