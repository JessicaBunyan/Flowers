import { GRID_WIDTH, GRID_HEIGHT } from "../constants";

export function boardTo2DArray<T>(board: T[]): T[][] {
	const res = [];
	for (let i = 0; i < GRID_WIDTH; i++) {
		res.push(board.slice(i * GRID_WIDTH, (i + 1) * GRID_WIDTH));
	}

	return res;
}

export function boardTo2DArrayTransposed<T>(board: T[]): T[][] {
	const res = [];
	for (let i = 0; i < GRID_HEIGHT; i++) {
		const row = [];
		for (let j = 0; j < GRID_WIDTH; j++) {
			row.push(board[GRID_WIDTH * j + i]);
			// res.push(board.slice(i * GRID_SIZE, i + 1 * GRID_SIZE));
		}
		res.push(row);
	}

	return res;
	// const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y] = board;

	// return [
	// 	[a, f, k, p, u],
	// 	[b, g, l, q, v],
	// 	[c, h, m, r, w],
	// 	[d, i, n, s, x],
	// 	[e, j, o, t, y],
	// ];
}
