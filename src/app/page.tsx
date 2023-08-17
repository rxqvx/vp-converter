"use client";
import "./index.css";
import Image from "next/image";
import Footer from "@/components/Footer";
import VPConverter from "@/components/VPConverter";
import ReaisConverter from "@/components/ReaisConverter";

export default function Home() {
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
			<div className=" p-24 flex justify-center items-center">
				<div className="glassmorphism md:w-full md:max-w-full w-fit max-w-[300px]">
					<div className="text-zinc-200 flex flex-col text-center">
						<h2>Atenção</h2>
						<p>
							Os valores não podem ser determinados com precisão
							devido à seguinte razão:
						</p>
						<p>
							Não é viável estimar um valor exato devido à
							natureza fixa e constante dos valores e bônus
							envolvidos. Eles não seguem um padrão de aumento com
							base em uma sequência numérica. Os cálculos empregam
							médias e estimativas, considerando também as
							flutuações nas taxas de câmbio, além das
							discrepâncias nos bônus e custos associados a cada
							pacote. Essa individualidade dos bônus conforme o
							pacote é evidenciada por exemplos como 475 - sem
							bônus, 1200 - 80 de bônus, 2300 - 190 de bônus, e
							assim por diante.{" "}
							<strong className="text-yellow-300">
								Resumidamente, se o valor inserido não
								corresponder ao valor dos pacotes, não será
								aplicado nenhum bônus.
							</strong>
						</p>
					</div>
					<div className="md:flex hidden flex-row items-center justify-evenly">
						<VPConverter />
						<ReaisConverter />
					</div>
					<div className="flex md:hidden flex-col items-center justify-center">
						<VPConverter />
						<ReaisConverter />
					</div>
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
