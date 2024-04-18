import React from "react";
import { useSelector } from "react-redux";
import styles from "./Bee.module.scss";
import { selectBoard, selectWinningPath } from "../../selectors";
import { indexToXY } from "../../utils/indexToXY";

type Props = {};

const Bee = (props: Props) => {
	const board = useSelector(selectBoard);
	const beePath = useSelector(selectWinningPath);

	const end = board.findIndex((cell) => cell.def === "end");
	const start = board.findIndex((cell) => cell.def === "start");

	const beePos = indexToXY(start);
	const honeyPos = indexToXY(end);
	const width = 41;

	const beeStyles: React.CSSProperties = { left: beePos[1] * width + "px", top: beePos[0] * width + "px" };

	if (beePath && beePath.length) {
		const bp = [...beePath];
		console.log("BEE PATH");
		console.log(beePath);
		const dist = 41;
		let x = dist / 2;
		let y = dist / 2;
		let path = "";
		let currCell = bp.shift();
		bp.forEach((cell) => {
			if (currCell === undefined) {
				throw Error();
			}
			const diff = cell - currCell;
			if (diff > 0) {
				if (diff > 1) {
					// below
					y = y + dist;
				} else {
					// right
					x = x + dist;
				}
			} else {
				if (diff < -1) {
					// above
					y = y - dist;
				} else {
					// left
					x = x - dist;
				}
			}
			path = path + `L ${x} ${y}`;
			currCell = cell;
		});
		beeStyles.offsetPath = `path("M20,20 ${path}")`;
		beeStyles.animationName = "move";
		console.log(beeStyles);
	}
	console.log(beePos);

	return (
		<>
			<img
				alt="honey"
				style={{ left: honeyPos[1] * width + "px", top: honeyPos[0] * width + "px" }}
				className={styles.honey}
				src="./honey.png"
			/>
			<img alt="bee" style={beeStyles} className={styles.bee} src="./bee.png" />
		</>
	);
};

export default Bee;
