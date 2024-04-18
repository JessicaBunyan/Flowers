import { GRID_COUNT, GRID_HEIGHT, GRID_WIDTH } from "../constants";

export default function genArray<T extends "">(count: number, contents: any): Array<T> {
	const arr: T[] = [];
	for (let i = 0; i < count; i++) {
		arr.push(contents);
	}
	return arr;
}

export function surroundWithcaterpillars(board: TSquareDef[][]): TSquareDef[][] {
	// TODO hack
	const copy: TSquareDef[][] = JSON.parse(JSON.stringify(board));
	const middles = copy.map((r) => {
		r.unshift("caterpillar");
		r.push("caterpillar");
		return r;
	});

	const topRow = genArray(GRID_WIDTH + 2, "caterpillar");
	const bottomRow = genArray(GRID_WIDTH + 2, "caterpillar");

	return [[...topRow], ...middles, [...bottomRow]];
}

export function genBoardWithBorder(startRow: number, endRow: number): TBoardDef {
	const arr: TSquareDef[] = genArray(GRID_WIDTH * GRID_HEIGHT, "");

	for (let i = 0; i < GRID_WIDTH; i++) {
		arr[i] = "wall";
		arr[GRID_COUNT - i - 1] = "wall";
	}

	for (let i = 0; i < GRID_HEIGHT; i++) {
		const left = i * GRID_WIDTH;
		const right = (i + 1) * GRID_WIDTH - 1;

		arr[left] = i === startRow ? "start" : "wall";
		arr[right] = i === endRow ? "end" : "wall";
	}

	return arr;
}
