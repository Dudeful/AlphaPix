import { DashboardHoc } from '../../../components/organisms';
import { Account } from '../../../components/molecules/Account';

const DepositDashboard = DashboardHoc(Account);

export const Deposit: React.FC = () => {
	return (
		<div className="bg-body-light-200 w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min">
			<DepositDashboard subTitle="batata" title="cafe" />
		</div>
	);
};
