import { getAdjacentSquares } from "../gameLogic/adjacentSquares";

export function findWinningPath(board: TBoardState) {
	console.log("in find winning path");
	console.log(board);

	const start = board.findIndex((b) => b.def === "start");
	const end = board.findIndex((b) => b.def === "end");
	board[end].distanceToWin = 0;

	markDepths(board, end, 1);

	function markDepths(board: TRenderedBoardState, index: number, depth: number) {
		const adjacents = getAdjacentSquares(index).filter(
			(sq) => board[sq].contents === "connectedPetal" || board[sq].def === "start",
		);

		adjacents.forEach((a) => {
			const existingDistance = board[a].distanceToWin ?? 99999999;
			const isConnectedPetal = board[a].contents === "connectedPetal" || board[a].def === "start";
			if (isConnectedPetal && existingDistance > depth) {
				board[a].distanceToWin = depth;
				markDepths(board, a, depth + 1);
			}
		});
	}

	console.log("with depths");
	console.log({ board });

	const path = [start];
	iterateDownDepths(path, board);

	console.log("done iterating");

	console.log({ path });

	return path;
}

function iterateDownDepths(path: number[], board: TBoardState) {
	const currentIndex = path[path.length - 1];
	const currentCell = board[currentIndex];
	const targetDistance = currentCell.distanceToWin! - 1; // !not null hack? TODO

	console.log(`iterating down. path ${path.join(", ")}, depth`);

	const next = getAdjacentSquares(currentIndex).find((sq) => board[sq].distanceToWin === targetDistance);
	if (next) {
		path.push(next);
		iterateDownDepths(path, board);
	} else {
		if (targetDistance > -1) {
			throw Error();
		}
	}
}
