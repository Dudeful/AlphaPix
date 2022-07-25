import { Link } from 'react-router-dom';
<<<<<<< Updated upstream:src/pages/Register/Index.tsx
import { Button } from '../../components/atoms';
import { Input } from '../../components/atoms';
=======
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input/index';
>>>>>>> Stashed changes:src/pages/Register/Register.tsx
import './styles.css';

export const Register = () => {
  const handleRegister = () => {
    console.log('entrou');
  };

  return (
    <div className="register-div container">
      <img src="./src/assets/logo.svg" alt="" />
      <p>Crie sua conta</p>
      <form action="">
        <Input type="text" placeholder="Digite seu Nome" />
        <Input
          type="text"
          placeholder="Digite sua data de nascimento"
        />
        <Input type="text" placeholder="Digite seu CPF" />
        <Input type="email" placeholder="Digite seu Email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Input type="password" placeholder="Confirme sua senha" />
        <Button type="button" onClick={handleRegister}>
          Cadastrar
        </Button>
      </form>
      <Link to={'/login'}>Entrar</Link>
    </div>
  );
};
