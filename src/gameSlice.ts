import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { findWinningPath } from "./utils/findWinningPath";
import { renderBoard } from "./utils/renderBoard";

// export type boardState = TBoardDef

const initialState: TGameSliceState = {
	board: [{ def: "", index: 0 }],
	gameDefinition: { boardDef: ["", ""] },
	flowers: [],

	gameValidity: {
		errors: { count: 0, invalidWords: [], islands: [] },
		isValid: true,
		validWords: [],
	},
};

type TGameSliceState = {
	board: TRenderedBoardState;
	flowers: TPlacedFlower[];
	gameValidity: TGameValidity;
	gameDefinition: TGameDef;
	winningPath?: number[];
	// errors: TErrorInfo;
	// validWords: TFoundWord[];
	won?: boolean;
};

export const gameSlice = createSlice({
	name: "board",
	initialState: initialState,
	reducers: {
		initialiseGame: (state, action: PayloadAction<TGameDef>) => {
			state.gameDefinition = action.payload;
			state.board = action.payload.boardDef.map((d, index) => ({ def: d, index }));
			// state.winningPath = [20, 21, 31, 32, 42, 43, 44, 34, 35, 36, 46, 47, 57, 58, 59];
			console.log(action.payload);
		},
		toggleTile: (state, action: PayloadAction<TPlacedFlower>) => {
			if (state.won) {
				return state;
			}
			const pos = action.payload.pos;
			console.log("#########");
			console.log(pos);

			const indexIfPresent = state.flowers.findIndex((f) => f.pos === pos);
			if (indexIfPresent !== -1) {
				const updated = state.flowers;
				updated.splice(indexIfPresent, 1);
				state.flowers = updated;
				state.board = renderBoard(updated, state.board);
				return;
			}

			// const adjacents = [left(pos), above(pos), right(pos), below(pos)].filter(notNull);
			// if (adjacents.some((a => state.b)))

			const toTest = [...state.flowers, action.payload];
			try {
				const renderedBoard = renderBoard(toTest, state.board);
				state.board = renderedBoard;

				// const endPos = renderedBoard.findIndex((cell) => cell.def === "end");
				const isWin = renderedBoard.some((cell) => cell.def === "end" && cell.contents === "connectedPetal");
				if (isWin) {
					state.won = true;
					const path = findWinningPath(renderedBoard);
					state.winningPath = path;
				}

				console.log("did place flower");
				// const highlighted = highlightPetalsOnPath(renderedBoard);
				// state.board = highlighted;
			} catch (e) {
				return;
			}
			state.flowers.push(action.payload);
		},
		removeTileFromBoard: (state, action: PayloadAction<number>) => {
			if (state.won) {
				return state;
			}
			// const currentPos = state.board.findIndex((sq) => sq === action.payload);

			// state.board[currentPos] = "";
		},
		shuffleRack: (state) => {
			// state.rack = shuffleArray(state.rack); //TODO won't work with things on board
		},
		resetGame: (state) => {
			// state.board = state.gameDefinition.boardDef;
		},
	},
});

export const { removeTileFromBoard, initialiseGame, toggleTile, shuffleRack, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
