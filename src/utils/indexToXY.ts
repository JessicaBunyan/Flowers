import { GRID_WIDTH } from "../constants";

export function indexToXY(index: number): XY {
	return [Math.floor(index / GRID_WIDTH), index % GRID_WIDTH];
}
