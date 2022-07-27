export interface  DepositDashboardType {
    accountNumber: string
	agency: string
	title: string
	subTitle: string
	getAccountNumber: (e: React.FormEvent<HTMLInputElement>) => void;
	getAgency: (e: React.FormEvent<HTMLInputElement>) => void;
	makeDeposit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
