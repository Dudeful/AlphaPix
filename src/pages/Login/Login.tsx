import { Link } from 'react-router-dom';
import './login.css';

export const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <Link to={'/register'}>Registrar</Link>
      <Link to={'/profile'}>Perfil</Link>
      <Link to={'/extract'}>Dashboard - Extrato</Link>
      <Link to={'/transf'}>Dashboard - Transferencia</Link>
      <Link to={'/deposit'}>Dashboard - Depósito</Link>
      <Link to={'/withdraw'}>Dashboard - Saque</Link>
    </div>
  );
};
