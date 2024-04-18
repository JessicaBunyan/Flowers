import { GRID_HEIGHT } from "../constants";

export function xyToIndex(pos: XY): number {
	return pos[0] * GRID_HEIGHT + pos[1];
}
