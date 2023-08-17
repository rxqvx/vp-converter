import { useState } from "react";
import ValorantIcon from "./icons/ValorantIcon";
import { vpValues } from "@/constants/values";
import MoneyIcon from "./icons/MoneyIcon";
import { IConverter } from "@/types/mapper";

const VPConverter = ({ className }: IConverter) => {
	const [bonus, setBonus] = useState<number>(0);
	const [currencyValue, setCurrencyValue] = useState<number>(0);

	const handleConvertVpToReais = (vpValue: number) => {
		const exists = vpValues.find((item) => item.vp === vpValue);

		if (exists) {
			setCurrencyValue(exists.real);
			setBonus(exists.bonus);
			return;
		}

		setCurrencyValue(vpValue * 0.0356);
		setBonus(0);
	};

	return (
		<div className="md:w-1/3 w-full border-2 rounded-2xl p-5 m-5 border-zinc-600 bg-[#ffffff33]">
			<label
				htmlFor="base-input"
				className="flex flex-row items-end justify-start mb-2 text-sm font-medium text-gray-200 dark:text-white"
			>
				<ValorantIcon />
				Valorant Points (VP)
			</label>
			<input
				type="number"
				onChange={(e) => handleConvertVpToReais(Number(e.target.value))}
				id="base-input"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
			/>
			<p className="text-zinc-400">Bônus: {bonus}</p>
			<div className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white md:overflow-auto overflow-scroll">
				<MoneyIcon />
				Reais (R$):{" "}
				<strong className="font-bold text-2xl pl-3">
					{Math.round(currencyValue).toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</strong>
			</div>
		</div>
	);
};

export default VPConverter;