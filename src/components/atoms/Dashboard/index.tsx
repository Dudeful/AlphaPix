import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface IDashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<IDashboardProps> = ({ children }) => {
  let value = '';

  const handleClickValue = () => {
    const el = document.querySelector('.value')?.innerHTML;
    if (el !== '') {
    }
  };

  return (
    <div className="dashboard-div">
      <div className="welcome-div">
        <p className="title-welcome">Bem-vindo, {children}!</p>
        <Link to={'/profile'}>
          <img className="image-user" src="../src/assets/user.svg" alt="" />
        </Link>
      </div>
      <div className="buttons-div">
        <div className="button-box">
          <Link to={'/extract'}>
            <img
              className="image-button"
              src="../src/assets/extract.svg"
              alt=""
            />
          </Link>
          <p className="button-name">Extrato</p>
        </div>
        <div className="button-box">
          <Link to={'/transf'}>
            <img
              className="image-button"
              src="../src/assets/transf.svg"
              alt=""
            />
          </Link>
          <p className="button-name">Transferir</p>
        </div>
        <div className="button-box">
          <Link to={'/deposit'}>
            <img
              className="image-button"
              src="../src/assets/deposit.svg"
              alt=""
            />
          </Link>
          <p className="button-name">Depositar</p>
        </div>
        <div className="button-box">
          <Link to={'/withdraw'}>
            <img
              className="image-button"
              src="../src/assets/withdraw.svg"
              alt=""
            />
          </Link>
          <p className="button-name">Sacar</p>
        </div>
      </div>
      <div className="acc-block">
        <div className="acc-line">
          <p>Agência: 1510-5</p>
          <p>Conta: 95785-3</p>
          <img src="./src/assets/arrow.svg" alt="" />
        </div>
        <div className="acc-value">
          <img src="./src/assets/eye.svg" alt="" onClick={handleClickValue} />
          <p className="value">132.759,30</p>
          <span>R$</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
