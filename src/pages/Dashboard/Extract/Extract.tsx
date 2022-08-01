import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DashboardHoc } from '../../../components/organisms';
import { Dashboard } from '../../../components/atoms';
import { DailyStatement } from '../../../components/molecules';

const DashboardExtract = DashboardHoc(Dashboard);

type IStatement = {
	transactions: Array<any>;
	account_details: any;
};

export const Extract: React.FC = () => {
	const [statement, setStatement] = useState<IStatement>({
		transactions: [],
		account_details: {},
	});

	useEffect(() => {
		axios
			.get(
				'http://gcp.dudeful.com:5000/statements?all=true&branch=0001&account=80258956-1&password=hellofriend'
				// 'http://gcp.dudeful.com:5000/statements?all=true&branch=0001&account=29904692-3&password=edtech123'
			)
			.then((res) => {
				const dateGroups = res.data.transactions.reduce(
					(dateGroups: any, transaction: any) => {
						const date = transaction.date.split('T')[0];
						if (!dateGroups[date]) {
							dateGroups[date] = [];
						}
						dateGroups[date].push(transaction);
						return dateGroups;
					},
					{}
				);

				const transactions = Object.keys(dateGroups).map((date) => {
					return {
						date,
						transactions: dateGroups[date],
					};
				});

				setStatement({
					transactions,
					account_details: res.data.account_details,
				});
				console.log({
					transactions,
					account_details: res.data.account_details,
				});
			})
			.catch((error) => console.error(error.message));
	}, []);

	return (
		<div className="bg-body-light-200 w-sm h-lg pb-7 flex flex-col justify-start items-center mx-auto min-h-min">
			<DashboardExtract children={'Cheetan'} />

			<div className="bg-white px-[15px] py-[12px] gap-25 flex-col items-center w-[314px] mt-10 rounded-[8px]">
				<div className="flex">
					<img src="src/assets/statement-icon.svg" alt="bank_icon" />
					<h3 className="ml-2 font-medium flex text-base items-center font-[Inter] text-[#C98E26]">
						Extrato de transações
					</h3>
				</div>
				<div className="bg-[#F3F9F9] p-[5px] w-[284px] rounded-[4px] mt-[20px]">
					{statement.transactions.map((group: any) => {
						return (
							<div key={group.date} className="mb-[20px]">
								<h3 className="mb-[-16px] font-medium text-[#727272]">
									{group.date}
								</h3>
								<DailyStatement
									account_details={statement.account_details}
									group={group}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
