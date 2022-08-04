import React, { ComponentType, useState } from 'react';

function DashboardHoc<T>(Component: ComponentType<T>) {
	return (hocProps: T) => {
		const [agency, setAgency] = useState('');
		const [accountNumber, setAccountNumber] = useState('');

		return (
			<Component
				{...hocProps}
				agency={agency}
				accountNumber={accountNumber}
				setAgency={(e: React.FormEvent<HTMLInputElement>) =>
					setAgency(e.currentTarget.value)
				}
				setAccountNumber={(e: React.FormEvent<HTMLInputElement>) =>
					setAccountNumber(e.currentTarget.value)
				}
			/>
		);
	};
}

export default DashboardHoc;
