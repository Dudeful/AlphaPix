import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../providers/User';

export const Profile = () => {
	const [userState, setUserState] = useContext(UserContext);

	function getFormatedDate(dateValue: Date) {
		let date = new Date(dateValue);
		let datestr = `${date.getUTCDate()}/${date.getMonth()}/${date.getFullYear()}`;
		return datestr;
	}

	return (
		<div className="bg-body-light-200 dark:bg-body-dark w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min my-[20px]">
			<div className="bg-brand-base w-[360px] h-[207px] rounded-b-[25px]">
				<div className="ml-[23px] mt-[21px]">
					<Link to={'/extract'}>
						<img src="./src/assets/arrow-back.svg" alt="back-arrow" />
					</Link>
				</div>
				<div className="flex flex-col mt-[7px]">
					<img
						className="w-[80px] self-center"
						src="./src/assets/img-profile.svg"
						alt="profile image"
					/>
					<p className="self-center mt-[12px] text-[20px] font-medium text-white">
						{userState[0].name}
					</p>
				</div>
			</div>
			<div className="w-[314px] h-[136px] bg-white dark:border dark:border-solid dark:border-btn-secondary-base dark:bg-body-dark rounded-[8px] mt-[41px]">
				<div className="flex flex-row gap-[10px] ml-[15px] mt-[13px]">
					<img src="./src/assets/card-profile.svg" alt="" />
					<p className="font-medium text-[16px] text-header-gold">Meus Dados</p>
				</div>
				<div className="w-[284px] h-[68px] bg-body-light-100 dark:bg-body-dark text-[13px] font-medium rounded-[4px] mx-[15px] p-[5px] text-input-placeholder dark:text-paragraph-light-100 flex flex-col mt-[20px] leading-[16px] gap-[5px]">
					<p>Nome: {userState[0].name}</p>
					<p>Data de nascimento: {getFormatedDate(userState[0].birthdate)}</p>
					<p>CPF: {userState[0].cpf}</p>
				</div>
			</div>
			<div className="w-[314px] h-[187px] bg-white dark:bg-body-dark rounded-[8px] mt-[36px] dark:border dark:border-solid dark:border-btn-secondary-base">
				<div className="flex flex-row gap-[10px] ml-[15px] mt-[13px]">
					<img src="./src/assets/acc-profile.svg" alt="" />
					<p className="font-medium text-[16px] text-header-gold">
						Minhas contas correntes
					</p>
				</div>
				<div className="w-[284px] h-[47px] bg-body-light-100 dark:bg-body-dark text-[13px] font-medium rounded-[4px] mx-[15px] p-[5px] text-input-placeholder flex flex-col mt-[20px] leading-[16px] gap-[5px] dark:border dark:border-solid dark:border-btn-secondary-base dark:text-paragraph-light-100">
					<p>Agência: {userState[0].branch}</p>
					<p>Conta: {userState[0].account_number} </p>
				</div>
			</div>
		</div>
	);
};
