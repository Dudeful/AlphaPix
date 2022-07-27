import React from 'react';
import { Input } from '../../atoms';
import { Title } from '../../atoms';
import './styles.css';

interface IAccountDataProps {
  title: string;
  value_1?: string;
  value_2?: string;
  readOnly?: boolean;
  classNames?: string;
}

const AccountData: React.FC<IAccountDataProps> = ({
  title,
  value_1,
  value_2,
  readOnly,
  classNames,
}) => {
  return (
    <>
      <Title classNames="" value={title} />
      <div className="flex justify-between">
        <div className="w-[45%] mb-5">
          <Input
            classNames={'block h-[45px] p-3 text-[18px] ' + classNames}
            type={'text'}
            value={value_1}
            readOnly={readOnly}
          />
          <label className="text-slate-500 mt-1 ml-1 block text-sm text-left">Agência</label>
        </div>
        <div className="w-[45%]">
          <Input
            classNames={'block h-[45px] p-3 text-[18px] ' + classNames}
            type={'text'}
            value={value_2}
            readOnly={readOnly}
          />
          <label className="text-slate-500 mt-1 ml-1 block text-sm text-left">Conta</label>
        </div>
      </div>
    </>
  );
};

export default AccountData;
