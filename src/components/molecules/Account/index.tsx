import React from 'react';
import { Input } from '../../atoms';
import {Button}  from '../../atoms/'
interface UserData {
  agency?: string;
  accountNumber?: string;
}
interface Titles {
  title?: string;
  subTitle?: string;
}

const Account: React.FC<UserData & Titles> = ({
  accountNumber,
  agency,
  title,
  subTitle,
}) => {
  return (
    <div>
      {title}
      {subTitle}
      <Input placeholder="" value={accountNumber} />
      <Input placeholder="" value={agency} />
    </div>
  );
};

export { Account };
