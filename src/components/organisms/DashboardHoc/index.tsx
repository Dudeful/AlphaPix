import React, {ComponentType, useEffect, useState} from 'react';
import { DepositDashboardType } from '../../../@types/hocs';


function DashboardHoc<T>(Component: ComponentType<T>) {
  return( hocProps: Omit< T, ""> ) => {
      const [agency, setAgency] = useState('')
      const [accountNumber, setAccountNumber] = useState('')

    useEffect(() => {
      console.log("agency",agency)
      console.log("account",accountNumber)
    }, [agency, accountNumber])

    return (
      <Component {...hocProps}
      agency={agency}
      accountNumber={accountNumber}
      setAgency={ (e:React.FormEvent<HTMLInputElement>) => setAgency(e.currentTarget.value)}
      setAccountNumber={(e:React.FormEvent<HTMLInputElement>) => setAccountNumber(e.currentTarget.value)}
      />
      
    )
  }
}


export default DashboardHoc

