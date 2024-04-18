import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialiseGame } from "../../gameSlice";
import { selectBoard, selectHasWon } from "../../selectors";
import { genBoardWithBorder } from "../../utils/genArray";
import Board from "../Board";
import WinMessage from "../WinMessage";

const caterpillarLocations = [12, 18, 25, 31, 44, 46, 52, 55, 57, 61];

const b: TBoardDef = genBoardWithBorder(2, 5);
// const withBorder = surroundWithRocks(b)

caterpillarLocations.forEach((e) => (b[e] = "caterpillar"));

const staticGame: TGameDef = {
	boardDef: b,
	// rackDef: ["A", "C", "E", "C"],
};

const Game = () => {
	const dispatch = useDispatch();
	const hasWon = useSelector(selectHasWon);

	useEffect(() => {
		dispatch(initialiseGame(staticGame));
	}, [dispatch]);

	const boardState = useSelector(selectBoard);

	console.log(boardState);

	//  TODO router

	return (
		<div id="game">
			<h1>Click on Flowers to bloom them!</h1>
			<h2>
				Flowers can't overlap other flowers <br />
				Make a connected path of orange petals so the bee can reach the honey
			</h2>

			{hasWon && <WinMessage />}
			<Board state={boardState} />

			{/* <button onClick={check}>Check</button> */}
		</div>
	);
};

export default Game;
