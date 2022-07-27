import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';

import { Deposit } from '../pages/Dashboard/Deposit/Deposit';
import { Extract } from '../pages/Dashboard/Extract/Extract';
import { Transf } from '../pages/Dashboard/Transf/Transf';
import { Withdraw } from '../pages/Dashboard/Withdraw/Withdraw';
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Profile/Profile';
import { Register } from '../pages/Register/Index';

//tests only>>>>>>>>>>>>>>
import { Transaction } from '../components/organisms';
import { AccountData } from '../components/molecules';
import { Title } from '../components/atoms';
//<<<<<<<<<<<<<<tests only

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/extract" element={<Extract />} />
        <Route path="/transf" element={<Transf />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />

        {/* tests only>>>>>>>>>>>>>> */}
        <Route
          path="/transaction"
          element={
            <Transaction
              buttonText={'Transferir'}
              title={<Title value={'Transferência'} classNames={'text-[23px] mb-5'} />}
              origin={
                <AccountData
                  title={'Origem'}
                  value_1={'4154-5'}
                  value_2={'12114-0'}
                  readOnly={true}
                  classNames={'bg-slate-100 text-neutral-500 font-medium'}
                />
              }
              destination={
                <AccountData title={'Destino'} readOnly={false} classNames={'font-medium'} />
              }
              value={32}
              password={'password'}
            />
          }
        />
        {/* <<<<<<<<<<<<<<tests only */}

        <Route path="*" element={<Navigate to={'/login'} />} />
      </Switch>
    </BrowserRouter>
  );
};
