export interface  DepositDashboardType {
    accountNumber: string
	agency: string
	title: string
	subTitle: string
	setAccountNumber: (e: React.FormEvent<HTMLInputElement>) => void;
	setAgency: (e: React.FormEvent<HTMLInputElement>) => void;
	makeDeposit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
