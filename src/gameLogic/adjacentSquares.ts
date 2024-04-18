import { GRID_WIDTH, GRID_HEIGHT } from "../constants";
import { notNull } from "../utils/notNull";

export function left(i: number): number | null {
	if (i % GRID_WIDTH === 0) {
		return null;
	} else {
		return i - 1;
	}
}
export function above(i: number): number | null {
	if (i < GRID_WIDTH) {
		return null;
	} else {
		return i - GRID_WIDTH;
	}
}
export function right(i: number): number | null {
	if (i % GRID_WIDTH === GRID_WIDTH - 1) {
		return null;
	} else {
		return i + 1;
	}
}
export function below(i: number): number | null {
	if (i + GRID_WIDTH > GRID_WIDTH * GRID_HEIGHT) {
		return null;
	} else {
		return i + GRID_WIDTH;
	}
}

export function getAdjacentSquares(center: number): number[] {
	const adjacents = [left(center), above(center), right(center), below(center)].filter(notNull);

	return adjacents;
}
