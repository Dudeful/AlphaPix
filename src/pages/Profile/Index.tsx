import { Link } from 'react-router-dom';

export const Profile = () => {
	return (
		<div className="bg-body-light-200 w-sm h-sm flex flex-col justify-start items-center mx-auto min-h-min">
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
						John Doe
					</p>
				</div>
			</div>
			<div className="w-[314px] h-[136px] bg-white rounded-[8px] mt-[41px]">
				<div className="flex flex-row gap-[10px] ml-[15px] mt-[13px]">
					<img src="./src/assets/card-profile.svg" alt="" />
					<p className="font-medium text-[16px] text-header-gold">Meus Dados</p>
				</div>
				<div className="w-[284px] h-[68px] bg-body-light-100 text-[13px] font-medium rounded-[4px] mx-[15px] p-[5px] text-input-placeholder flex flex-col mt-[20px] leading-[16px] gap-[5px]">
					<p>Nome: John Doe</p>
					<p>Data de nascimento: 01/01/2000</p>
					<p>CPF: 123.456.789-01</p>
				</div>
			</div>
			<div className="w-[314px] h-[187px] bg-white rounded-[8px] mt-[36px]">
				<div className="flex flex-row gap-[10px] ml-[15px] mt-[13px]">
					<img src="./src/assets/acc-profile.svg" alt="" />
					<p className="font-medium text-[16px] text-header-gold">
						Minhas contas correntes
					</p>
				</div>
				<div className="w-[284px] h-[47px] bg-body-light-100 text-[13px] font-medium rounded-[4px] mx-[15px] p-[5px] text-input-placeholder flex flex-col mt-[20px] leading-[16px] gap-[5px]">
					<p>Agência: 1510-5</p>
					<p>Conta: 95785-3 </p>
				</div>
				<div className="w-[284px] h-[47px] bg-body-light-100 text-[13px] font-medium rounded-[4px] mx-[15px] p-[5px] text-input-placeholder flex flex-col mt-[20px] leading-[16px] gap-[5px]">
					<p>Agência: 1510-5</p>
					<p>Conta: 95785-3 </p>
				</div>
			</div>
		</div>
	);
};
