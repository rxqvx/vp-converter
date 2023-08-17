import { vpValues } from "@/constants/values";
import MoneyIcon from "./icons/MoneyIcon";
import { useState } from "react";
import ValorantIcon from "./icons/ValorantIcon";

const ReaisConverter = () => {
	const [vpValue, setVpValue] = useState<number>(0);
	const [realBonus, setRealBonus] = useState<number>(0);

	const handleConvertReaisToVp = (reais: number) => {
		const exists = vpValues.find((item) => item.real === reais);

		if (exists) {
			setVpValue(exists.vp);
			setRealBonus(exists.bonus);
			return;
		}

		setVpValue(reais / 0.0356);
		setRealBonus(0);
	};

	return (
		<div className="md:w-1/3 w-full border-2 rounded-2xl p-5 m-5 border-zinc-600 bg-[#ffffff33]">
			<label
				htmlFor="base-input"
				className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white"
			>
				<MoneyIcon />
				Reais (R$)
			</label>
			<input
				type="number"
				placeholder="39.90"
				onChange={(e) => handleConvertReaisToVp(Number(e.target.value))}
				id="base-input"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
			/>
			<p className="text-zinc-400">Bônus: {realBonus}</p>
			<div className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white md:overflow-auto overflow-scroll">
				<ValorantIcon />
				Valorant Points (VP):{" "}
				<strong className="font-bold text-2xl pl-3">
					{Math.round(Number(vpValue))} VP
				</strong>
			</div>
		</div>
	);
};

export default ReaisConverter;
