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
        <InputRegister type="text" placeholder="Digite seu Nome" value="" />
        <InputRegister
          type="text"
          placeholder="Digite sua data de nascimento"
          value=""
        />
        <InputRegister type="text" placeholder="Digite seu CPF" value="" />
        <InputRegister type="text" placeholder="Digite seu Email" value="" />
        <InputRegister type="text" placeholder="Digite sua senha" value="" />
        <InputRegister type="text" placeholder="Confirme sua senha" value="" />
        <Button type="button" onClick={handleRegister}>
          Cadastrar
        </Button>
      </form>
      <Link to={'/login'}>Entrar</Link>
    </div>
  );
};
