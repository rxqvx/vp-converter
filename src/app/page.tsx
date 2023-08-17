"use client";
import "./index.css";
import Image from "next/image";
import ValorantIcon from "@/components/icons/ValorantIcon";
import MoneyIcon from "@/components/icons/MoneyIcon";
import Footer from "@/components/Footer";
import { useState } from "react";

type TMapper = { [key: number]: { bonus: number; costPerVp: number } };

export default function Home() {
  const [vpValue, setVpValue] = useState<number>();
  const [bonus, setBonus] = useState<number>(0);
  const [realBonus, setRealBonus] = useState<number>(0);
  const [currencyValue, setCurrencyValue] = useState<number>();

  const vpValues = [
    { id: 1, vp: 475, bonus: 0, costPerVp: 0.0356, real: 16.9 }, //cpv = 16.90 / (475 + 0) ≈ 0.0356 R$/VP
    { id: 2, vp: 1200, bonus: 80, costPerVp: 0.0314, real: 39.9 }, //cpv = 39.90 / (1200 + 80) ≈ 0.0314 R$/VP
    { id: 3, vp: 2300, bonus: 190, costPerVp: 0.0307, real: 74.9 }, //cpv = 74.90 / (2300 + 190) ≈ 0.0307 R$/VP
    { id: 4, vp: 4400, bonus: 470, costPerVp: 0.0302, real: 139.9 }, //cpv = 139.90 / (4400 + 470) ≈ 0.0302 R$/VP
    { id: 5, vp: 5500, bonus: 720, costPerVp: 0.0286, real: 169.9 }, //cpv = 169.90 / (5500 + 720) ≈ 0.0286
    { id: 6, vp: 11500, bonus: 1670, costPerVp: 0.0271, real: 349.9 }, //cpv = 349.90 / (11500 + 1670) ≈ 0.0271
  ];

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
        className="z-50 m-5"
      />
      <h1 className="font-bold z-10 text-zinc-200 text-5xl">
        Conversor de Valorant Points (VP)
      </h1>
      <div className=" p-24">
        <div className="glassmorphism">
          <div className="text-zinc-200 flex flex-col text-center">
            <h2>Atenção</h2>
            <p>
              Os valores não podem ser determinados com precisão devido à
              seguinte razão:
            </p>
            <p>
              Não é viável estimar um valor exato devido à natureza fixa e
              constante dos valores e bônus envolvidos. Eles não seguem um
              padrão de aumento com base em uma sequência numérica. Os cálculos
              empregam médias e estimativas, considerando também as flutuações
              nas taxas de câmbio, além das discrepâncias nos bônus e custos
              associados a cada pacote. Essa individualidade dos bônus conforme
              o pacote é evidenciada por exemplos como 475 - sem bônus, 1200 -
              80 de bônus, 2300 - 190 de bônus, e assim por diante.{" "}
              <strong className="text-yellow-300">
                Resumidamente, se o valor inserido não corresponder ao valor dos
                pacotes, não será aplicado nenhum bônus.
              </strong>
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-evenly">
              <div className="w-1/3 border-2 rounded-2xl p-5 m-5 border-zinc-600 bg-[#ffffff33]">
                <label
                  htmlFor="base-input"
                  className="flex flex-row items-end justify-start mb-2 text-sm font-medium text-gray-200 dark:text-white"
                >
                  <ValorantIcon />
                  Valorant Points (VP)
                </label>
                <input
                  type="number"
                  onChange={(e) =>
                    handleConvertVpToReais(Number(e.target.value))
                  }
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
                />
                <p className="text-zinc-400">Bônus: {bonus}</p>
                <div className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white">
                  <MoneyIcon />
                  Reais (R$):{" "}
                  <strong className="font-bold text-2xl pl-3">
                    {currencyValue}
                  </strong>
                </div>
              </div>
              <div className="w-1/3 border-2 rounded-2xl p-5 m-5 border-zinc-600 bg-[#ffffff33]">
                <label
                  htmlFor="base-input"
                  className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white"
                >
                  <MoneyIcon />
                  Reais (R$)
                </label>
                <input
                  type="number"
                  onChange={(e) =>
                    handleConvertReaisToVp(Number(e.target.value))
                  }
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
                />
                <p className="text-zinc-400">Bônus: {realBonus}</p>

                <div className="flex flex-row items-end justify-start  mb-2 text-sm font-medium text-gray-200 dark:text-white">
                  <ValorantIcon />
                  Valorant Points (VP):{" "}
                  <strong className="font-bold text-2xl pl-3">{vpValue}</strong>
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open("https://imgur.com/gallery/E1tP204")}
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
