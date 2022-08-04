import React, { useState } from 'react';
import Button from '../Button';

interface IModalProps {
	handleClose: () => void;
	handleConfirm?: () => void;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	showModal: boolean;
}

const Modal: React.FC<IModalProps> = ({
	handleClose,
	showModal,
	handleConfirm,
}) => {
	return (
		<>
			{showModal ? (
				<div className="flex flex-col w-sm h-[202px] inset-x-auto bg-white bottom-0 fixed rounded-t-[25px] justify-between p-[20px] z-9999">
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
						<Button
							onClick={handleClose}
							className="bg-btn-cancel-base w-[108px]"
						>
							Cancelar
						</Button>
						<Button
							onClick={handleConfirm}
							className="bg-btn-primary-base w-[108px]"
						>
							Confirmar
						</Button>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Modal;
