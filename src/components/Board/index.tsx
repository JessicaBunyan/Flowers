import { useSelector } from "react-redux";
import { GRID_WIDTH } from "../../constants";
import { selectBoard } from "../../selectors";
import { boardTo2DArray } from "../../utils/boardTo2d";
import Square from "../Square";
import styles from "./Board.module.scss";
import Bee from "../Bee";

type Props = { state: TSquareState[] };

const Board = ({ state }: Props) => {
	// const data = boardTo2DArrayTransposed(state);
	// console.log(data);

	const st = useSelector(selectBoard);
	const data = boardTo2DArray(st);

	console.log(st);
	console.log(data);

	return (
		<div style={{ position: "relative" }}>
			<table className={styles.table}>
				<tbody>
					{data.map((row, rowIndex) => {
						return (
							<tr key={rowIndex}>
								{row.map((l, colIndex) => (
									<Square
										key={colIndex}
										index={rowIndex * GRID_WIDTH + colIndex}
										state={st[rowIndex * GRID_WIDTH + colIndex]}
									/>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<Bee />
		</div>
	);
};

export default Board;
