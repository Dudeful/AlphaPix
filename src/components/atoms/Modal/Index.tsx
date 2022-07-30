import React, { useState } from 'react';
import Button from '../Button';

interface IModalProps {
	close?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal: React.FC<IModalProps> = ({ close = false, onClick }) => {
	const [isActive, setIsActive] = useState(close);

	const handleClose = () => {
		setIsActive((current) => !current);
	};

	return (
		<div
			className={`${
				isActive ? 'hidden' : 'flex flex-col'
			} w-full h-[202px] inset-x-auto top-auto bg-white bottom-[-77px] relative rounded-t-[25px] justify-between p-[20px]`}
		>
			<div className="flex flex-row justify-between">
				<p className="text-[20px] font-normal">Confirmar transação</p>
				<img
					onClick={handleClose}
					className="w-[20px] cursor-pointer"
					src="../src/assets/btn-x.svg"
					alt=""
				/>
			</div>

			<p className="w-[211px] leading-[24px] text-[14px] font-medium text-center self-center text-paragraph-dark">
				Esta ação efetuará a transação. deseja continuar?
			</p>

			<div className="flex flex-row justify-center gap-[20px]">
				<Button onClick={handleClose} className="bg-btn-cancel-base w-[108px]">
					Cancelar
				</Button>
				<Button className="bg-btn-primary-base w-[108px]">Confirmar</Button>
			</div>
		</div>
	);
};

export default Modal;
