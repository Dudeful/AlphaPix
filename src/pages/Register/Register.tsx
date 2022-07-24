import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { InputRegister } from '../../components/InputRegister/InputRegister';
import './register.css';

export const Register = () => {
  const handleRegister = () => {
    console.log('entrou');
  };

  return (
    <div className="register-div container">
      <img src="./src/assets/logo.svg" alt="" />
      <p>Crie sua conta</p>
      <form action="">
        <InputRegister type="text" placeholder="Digite seu Nome" />
        <InputRegister
          type="text"
          placeholder="Digite sua data de nascimento"
        />
        <InputRegister type="text" placeholder="Digite seu CPF" />
        <InputRegister type="email" placeholder="Digite seu Email" />
        <InputRegister type="password" placeholder="Digite sua senha" />
        <InputRegister type="password" placeholder="Confirme sua senha" />
        <Button type="button" onClick={handleRegister}>
          Cadastrar
        </Button>
      </form>
      <Link to={'/login'}>Entrar</Link>
    </div>
  );
};
