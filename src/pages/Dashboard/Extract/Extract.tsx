import { DashboardHoc } from '../../../components/organisms';
import { Account } from '../../../components/molecules/Account';

const DashboardExtract = DashboardHoc(Account);

export const Extract: React.FC = () => {
	return (
		<div className="bg-body-light-200 w-sm h-sm flex flex-col justify-start items-center mx-auto my-6 min-h-min">
			<DashboardExtract />
		</div>
	);
};
