"use client";
import "./index.css";
import Image from "next/image";
import ValorantIcon from "@/components/icons/ValorantIcon";
import MoneyIcon from "@/components/icons/MoneyIcon";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="flex relative w-full min-h-screen flex-col items-center justify-between">
			<Image
				src="/wallpaper.jpg"
				alt={"wallpaper"}
				fill
				priority
				quality={100}
				className="object-cover md:object-right-top brightness-[80%] opacity-40"
			/>
			<Image
				src={"/valorantLogo.png"}
				alt={"logo do valorant"}
				width={150}
				height={150}
				className="z-50"
			/>
			<h1 className="font-bold z-10 text-zinc-200 text-5xl">
				Conversor de valorant points
			</h1>
			<div className=" p-24">
				<div className="glassmorphism">
					<div className="text-zinc-200 flex flex-col text-center">
						<h2>Atenção</h2>
						<p>
							Os valores não são exatos, caso queira saber o
							motivo:
						</p>
						<p>
							Não é possível de forma alguma estimar um valor
							exato, pois os valores e os bônus são fixos e
							constantes, não são valores crescentes a partir de
							uma razão de uma sequencia númerica, os cálculos
							usam médias e estimativas, mas com taxas de câmbio
							variáveis, bônus e custos diferentes por pacote que
							causam variações nos resultados, ou seja é um bônus
							específico para cada pacote (475 - 0 bônus, 1200 -
							80 de bônus , 2300 - 190 de bônus, etc.).{" "}
							<strong className="text-yellow-300">
								Em suma, caso o valor inserido não seja o mesmo
								dos pacotes, não haverá bônus.
							</strong>
						</p>
					</div>
					<div>
						<label
							htmlFor="base-input"
							className="flex flex-row items-end justify-start mb-2 text-sm font-medium text-gray-200 dark:text-white"
						>
							<ValorantIcon />
							Valorant points (VP)
						</label>
						<input
							type="text"
							id="base-input"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
						/>
						<label
							htmlFor="base-input"
							className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white"
						>
							<MoneyIcon />
							Reais (R$)
						</label>
						<input
							type="text"
							id="base-input"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
						/>
						<button
							onClick={() =>
								window.open("https://www.w3schools.com")
							}
						>
							<div className="bg-rose-700 h-5 w-fit px-10 py-5 justify-center items-center rounded-2xl text-center text-zinc-200 flex mt-5 text-2xl font-semibold">
								Calcular
							</div>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
