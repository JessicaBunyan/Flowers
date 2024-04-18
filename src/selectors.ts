import { createSelector } from "reselect";
import { GRID_WIDTH } from "./constants";
import { RootState } from "./store";
import { xyToIndex } from "./utils/xyToIndex";

export const selectActiveTile = (state: RootState) => state.activeTile.activeTile;
export const selectFlowers = (state: RootState) => state.game.flowers;
export const selectGameValidity = (state: RootState) => state.game.gameValidity;
export const selectBoard = (state: RootState) => state.game.board;
export const selectHasWon = (state: RootState) => state.game.won;
export const selectErrors = (state: RootState): TErrorInfo => state.game.gameValidity.errors;
export const selectValidWords = (state: RootState): TFoundWord[] => state.game.gameValidity.validWords;

// export const selectRenderedBoardState = createSelector(
// 	selectFlowers,
// 	selectBoardDef,
// 	(flowers, boardDef): TRenderedBoardState => renderBoard(flowers, boardDef),
// );

export const selectWinningPath = (state: RootState) =>
	state.game.winningPath ? [...state.game.winningPath] : undefined;

export const selectValidWordSquares = createSelector(selectValidWords, (validWords): number[] => {
	const adjacencyOffset = {
		H: 1,
		V: GRID_WIDTH,
	};

	return validWords
		.map((v) => [...v.word].map((char, index) => xyToIndex(v.pos) + adjacencyOffset[v.direction] * index))
		.flat();
});
