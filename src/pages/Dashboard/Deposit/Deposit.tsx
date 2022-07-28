import { DashboardHoc} from '../../../components/organisms'
import { Account } from '../../../components/molecules/Account'

const DepositDashboard = DashboardHoc(Account)

export const Deposit:React.FC = () => {


  

  return (
    <DepositDashboard

    />
  )
}
