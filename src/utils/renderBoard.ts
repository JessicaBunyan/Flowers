import { above, below, getAdjacentSquares, left, right } from "../gameLogic/adjacentSquares";
import { notNull } from "./notNull";

// const placeSmallFlower = (index) => {

// }
// const placeFlowers = {
// 	"SMALL": placeSmallFlower
// }

export function renderBoard(flowers: TPlacedFlower[], boardState: TBoardState): TRenderedBoardState {
	// const b = board.map((sq) => (sq !== "" ? rack[sq] : ""));

	const board: TBoardState = [...boardState.map((st) => ({ def: st.def, index: st.index }))];
	// const board: TSquareState[] = genArray(GRID_HEIGHT * GRID_WIDTH, "");

	flowers.forEach((f) => {
		const center = f.pos;

		if (board[center].contents) {
			throw new Error(board[center].contents);
		}
		board[center].contents = "stem";

		const adjacents = [left(center), above(center), right(center), below(center)].filter(notNull);

		adjacents.forEach((a) => {
			if (board[a].contents === "petal" || board[a].contents === "stem") {
				throw new Error();
			}
			if (board[a].def !== "wall") {
				board[a].contents = "petal";
			}
		});
	});

	const withHighlightedPetals = highlightPetalsOnPath(board);
	const withDisabledBuds = disabledLockedBuds(withHighlightedPetals);
	console.log({ withDisabledBuds });
	return withDisabledBuds;

	// return board;
	// return b;
}

export function disabledLockedBuds(boardState: TBoardState): TBoardState {
	boardState.forEach((cell, cellIndex) => {
		const adjacents = getAdjacentSquares(cellIndex);

		if (cell.def === "" && cell.contents !== "stem" && adjacents.some((a) => boardState[a].contents)) {
			cell.isLocked = true;
		}
	});

	return boardState;
}

// export function placePetals(flowers: TPlacedFlower[], boardState: TBoardState): TRenderedBoardState {
// 	// const b = board.map((sq) => (sq !== "" ? rack[sq] : ""));

// 	const board: TBoardState = JSON.parse(JSON.stringify(boardState));
// 	// const board: TSquareState[] = genArray(GRID_HEIGHT * GRID_WIDTH, "");

// 	flowers.forEach((f) => {
// 		const center = f.pos;

// 		if (board[center].contents) {
// 			throw new Error();
// 		}
// 		board[center].contents = "stem";

// 		const adjacents = getAdjacentSquares(center);
// 		adjacents.forEach((a) => {
// 			if (board[a].contents === "petal" || board[a].contents === "stem") {
// 				throw new Error();
// 			}
// 			if (board[a].def !== "wall") {
// 				board[a].contents = "petal";
// 			}
// 		});
// 	});

// 	return board;
// 	// return b;
// }

export function highlightPetalsOnPath(boardState: TRenderedBoardState) {
	const board: TRenderedBoardState = JSON.parse(JSON.stringify(boardState));

	const startPos = board.findIndex((cell) => cell.def === "start");
	console.log({ startPos });
	const visited = new Set<number>();
	visited.add(startPos);

	highlightAdjacentPetals(visited, board, startPos);
	return board;
}

function highlightAdjacentPetals(visited: Set<number>, board: TRenderedBoardState, index: number) {
	const adjacents = getAdjacentSquares(index).filter((sq) => !visited.has(sq));

	adjacents.forEach((a) => {
		visited.add(a);
		if (board[a].def === "end") {
			board[a].contents = "connectedPetal";
			return true;
		}
		if (board[a].contents === "petal") {
			board[a].contents = "connectedPetal";
			highlightAdjacentPetals(visited, board, a);
		}
	});
}

// export function tryPlaceFlower(flowers: TPlacedFlower[], boardState: TBoardState): TRenderedBoardState {
// 	// const b = board.map((sq) => (sq !== "" ? rack[sq] : ""));

// 	const board: TBoardState = JSON.parse(JSON.stringify(boardState));
// 	// const board: TSquareState[] = genArray(GRID_HEIGHT * GRID_WIDTH, "");

// 	flowers.forEach((f) => {
// 		const center = f.pos;

// 		if (board[center].contents) {
// 			throw new Error();
// 		}
// 		board[center].contents = "stem";

// 		const adjacents = [left(center), above(center), right(center), below(center)].filter(notNull);

// 		adjacents.forEach((a) => {
// 			if (board[a].contents === "petal" || board[a].contents === "stem") {
// 				throw new Error();
// 			}
// 			board[a].contents = "petal";
// 		});
// 	});

// 	return board;
// 	// return b;
// }
