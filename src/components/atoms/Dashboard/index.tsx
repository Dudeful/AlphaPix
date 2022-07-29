import React from 'react';
import { Link } from 'react-router-dom';

interface IDashboardProps {
	children: React.ReactNode;
}

const Dashboard: React.FC<IDashboardProps> = ({ children }) => {
	const handleClickValue = () => {};

	return (
		<div className="w-[360px] h-[207px] text-white bg-brand-base rounded-b-[25px] mb-[40px]">
			<div className="w-auto h-auto flex flex-row justify-between mt-[24px] mb-0 mx-[38px]">
				<p className="text-[20px] font-medium my-auto mx-0">
					Bem-vindo, {children}!
				</p>
				<Link to={'/profile'}>
					<img
						className="w-[20px] my-auto mx-0"
						src="../src/assets/user.svg"
						alt=""
					/>
				</Link>
			</div>
			<div className="w-full h-[85px] flex flex-row justify-center gap-[10px] mt-[28px] mb-0 mx-0">
				<div className="w-fit h-full flex flex-col justify-center">
					<Link to={'/extract'}>
						<img
							className="w-[54px] m-0"
							src="../src/assets/extract.svg"
							alt=""
						/>
					</Link>
					<p className="text-[12px] self-center font-normal mt-[9px] mb-0 mx-0">
						Extrato
					</p>
				</div>
				<div className="w-fit h-full flex flex-col justify-center">
					<Link to={'/transf'}>
						<img
							className="w-[54px] m-0"
							src="../src/assets/transf.svg"
							alt=""
						/>
					</Link>
					<p className="text-[12px] self-center font-normal mt-[9px] mb-0 mx-0">
						Transferir
					</p>
				</div>
				<div className="w-fit h-full flex flex-col justify-center">
					<Link to={'/deposit'}>
						<img
							className="w-[54px] m-0"
							src="../src/assets/deposit.svg"
							alt=""
						/>
					</Link>
					<p className="text-[12px] self-center font-normal mt-[9px] mb-0 mx-0">
						Depositar
					</p>
				</div>
				<div className="w-fit h-full flex flex-col justify-center">
					<Link to={'/withdraw'}>
						<img
							className="w-[54px] m-0"
							src="../src/assets/withdraw.svg"
							alt=""
						/>
					</Link>
					<p className="text-[12px] self-center font-normal mt-[9px] mb-0 mx-0">
						Sacar
					</p>
				</div>
			</div>
			<div className="w-[285px] h-[73px] bg-white shadow-inner rounded-[10px] my-[0px] mx-auto p-[8px]">
				<div className="text-header-gold text-[14px] font-medium flex flex-row justify-between my-0 mx-[17px]">
					<p className="m-0">Agência: 1510-5</p>
					<p className="m-0">Conta: 95785-3</p>
					<img className="m-0 w-[12px]" src="./src/assets/arrow.svg" alt="" />
				</div>
				<div className="flex flex-row justify-start gap-[6px] my-[10px] mx-[17px]">
					<img
						className="w-[14px] h-[9px] my-auto"
						src="./src/assets/eye.svg"
						alt="image eye"
						onClick={handleClickValue}
					/>
					<p className="text-brand-base text-[24px] font-bold mt-auto mb-0 mx-0">
						132.759,30
					</p>
					<span className="text-brand-hover font-[14px] leading-none font-bold mt-auto mb-[2px] mx-0">
						R$
					</span>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
