"use client";
import "./index.css";
import { useState } from "react";

import Image from "next/image";
import Footer from "@/components/Footer";
import VPConverter from "@/components/VPConverter";
import ReaisConverter from "@/components/ReaisConverter";
import { Fade } from "react-awesome-reveal";

export default function Home() {
	const [showMessage, setShowMessage] = useState<boolean>(true);

	return (
		<main className="flex relative w-full min-h-screen flex-col items-center justify-between">
			<Image
				src="/wallpaper.jpg"
				alt={"wallpaper"}
				fill
				priority
				quality={100}
				className="object-cover md:object-right-top brightness-[80%] opacity-40 hidden md:flex"
			/>
			<Image
				src={"/valorantLogo.png"}
				alt={"logo do valorant"}
				width={150}
				height={150}
				className="z-50 m-5"
			/>
			<h1 className="font-bold z-10 text-zinc-200 text-5xl text-center">
				Conversor de Valorant Points (VP)
			</h1>
			<div className=" p-24 flex justify-center items-center w-full">
				<div className="glassmorphism md:w-full md:max-w-full w-fit max-w-[300px]">
					{showMessage ? (
						<Fade
							className="text-zinc-200 flex flex-col text-center"
							direction="left"
						>
							<h2>Atenção</h2>
							<p>
								Os valores não podem ser determinados com
								precisão devido à seguinte razão:
							</p>
							<p>
								Não é viável estimar um valor exato devido à
								natureza fixa e constante dos valores e bônus
								envolvidos. Eles não seguem um padrão de aumento
								com base em uma sequência numérica. Os cálculos
								empregam médias e estimativas, considerando
								também as flutuações nas taxas de câmbio, além
								das discrepâncias nos bônus e custos associados
								a cada pacote. Essa individualidade dos bônus
								conforme o pacote é evidenciada por exemplos
								como 475 - sem bônus, 1200 - 80 de bônus, 2300 -
								190 de bônus, e assim por diante.{" "}
								<strong className="text-yellow-300">
									Resumidamente, se o valor inserido não
									corresponder ao valor dos pacotes, não será
									aplicado nenhum bônus.
								</strong>
								<button
									onClick={() => setShowMessage(false)}
									className="underline hover:text-slate-500"
								>
									(esconder mensagem)
								</button>
							</p>
						</Fade>
					) : (
						<button
							onClick={() => setShowMessage(true)}
							className="flex justify-center items-center w-full text-zinc-200 underline hover:text-slate-500"
						>
							(mostrar mensagem)
						</button>
					)}
					<Fade
						className="md:flex hidden flex-row items-center justify-evenly "
						cascade
						direction="right"
					>
						<VPConverter />
						<ReaisConverter />
					</Fade>
					<Fade
						className="flex md:hidden flex-col items-center justify-center"
						cascade
						direction="right"
					>
						<VPConverter />
						<ReaisConverter />
					</Fade>
					<div className="w-full flex justify-center items-center">
						<button
							onClick={() =>
								window.open("https://imgur.com/gallery/E1tP204")
							}
						>
							<div className="bg-rose-700 h-5 w-fit px-10 py-5 justify-center items-center rounded-2xl text-center text-zinc-200 flex mt-5 text-2xl font-semibold hover:bg-rose-900">
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
