import React, { ReactNode } from 'react';

interface IStatementProps {
	account_details: any;
	group: any;
}

const DailyStatement: React.FC<IStatementProps> = (statement) => {
	return (
		<div className="flex-col justify-between mt-5">
			{statement.group.transactions.map((transaction: any) => {
				if (
					transaction.type === 'acc_transfer' &&
					transaction.creadit_part === statement.account_details.holder
				) {
					return (
						<div
							key={transaction.id}
							className="text-[#A8A8A8] flex justify-between"
						>
							<h5 className="ml-[7px] font-medium">Transferência enviada</h5>
							<h5 className="text-[#FF5959] font-bold">
								- ${transaction.amount}
							</h5>
						</div>
					);
				} else if (transaction.type === 'acc_transfer') {
					return (
						<div
							key={transaction.id}
							className="text-[#A8A8A8] flex justify-between"
						>
							<h5 className="ml-[7px] font-medium">Transferência recebida</h5>
							<h5 className="text-[#53D496] font-bold">
								+ ${transaction.amount}
							</h5>
						</div>
					);
				} else if (transaction.type === 'withdraw') {
					return (
						<div
							key={transaction.id}
							className="text-[#A8A8A8] flex justify-between"
						>
							<h5 className="ml-[7px] font-medium">Saque</h5>
							<h5 className="text-[#FF5959] font-bold">
								- ${transaction.amount}
							</h5>
						</div>
					);
				} else if (transaction.type === 'deposit') {
					return (
						<div
							key={transaction.id}
							className="text-[#A8A8A8] flex justify-between"
						>
							<h5 className="ml-[7px] font-medium">Depósito</h5>
							<h5 className="text-[#53D496] font-bold">
								+ ${transaction.amount}
							</h5>
						</div>
					);
				}
			})}
		</div>
	);
};

export { DailyStatement };
