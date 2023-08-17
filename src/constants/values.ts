import { IVP } from "@/types/mapper";

export const vpValues: IVP[] = [
	{ id: 1, vp: 475, bonus: 0, costPerVp: 0.0356, real: 16.9 }, //cpv = 16.90 / (475 + 0) ≈ 0.0356 R$/VP
	{ id: 2, vp: 1200, bonus: 80, costPerVp: 0.0314, real: 39.9 }, //cpv = 39.90 / (1200 + 80) ≈ 0.0314 R$/VP
	{ id: 3, vp: 2300, bonus: 190, costPerVp: 0.0307, real: 74.9 }, //cpv = 74.90 / (2300 + 190) ≈ 0.0307 R$/VP
	{ id: 4, vp: 4400, bonus: 470, costPerVp: 0.0302, real: 139.9 }, //cpv = 139.90 / (4400 + 470) ≈ 0.0302 R$/VP
	{ id: 5, vp: 5500, bonus: 720, costPerVp: 0.0286, real: 169.9 }, //cpv = 169.90 / (5500 + 720) ≈ 0.0286
	{ id: 6, vp: 11500, bonus: 1670, costPerVp: 0.0271, real: 349.9 }, //cpv = 349.90 / (11500 + 1670) ≈ 0.0271
];
