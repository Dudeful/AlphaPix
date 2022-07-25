import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';

import { Deposit } from '../pages/Dashboard/Deposit/Deposit'
import { Extract } from '../pages/Dashboard/Extract/Extract'
import { Transf } from '../pages/Dashboard/Transf/Transf'
import { Withdraw } from '../pages/Dashboard/Withdraw/Withdraw'
import { Login } from '../pages/Login/Login'
import { Profile } from '../pages/Profile/Profile'
import { Register } from '../pages/Register/Index'

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
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Switch>
    </BrowserRouter>
  );
};
