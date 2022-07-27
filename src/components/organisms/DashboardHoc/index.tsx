import { ComponentType,useCallback, useState} from 'react';
import { DepositDashboardType } from '../../../@types/hocs';


function DashboardHoc<T>(Component: ComponentType<T>) {
  return(hocProps: T & {}) => {
    const [state, setState] = useState()
    const [stateTwo, setStateTwo] = useState()

    return (
      <Component
      {...hocProps}
      />
    )
  }
}


export default DashboardHoc

