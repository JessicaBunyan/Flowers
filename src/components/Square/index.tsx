import cx from "classnames";
import Caterpillar from "../Caterpillar";
import Flower from "../Flower";
import styles from "./Square.module.scss";
import { useSelector } from "react-redux";
import { selectWinningPath } from "../../selectors";

type Props = { state: TSquareState; index: number };

const Square = ({ state, index }: Props) => {
	// if (state === "stem" || state === "petal") {
	// 	contents = <div className={styles[state]}>{button}</div>;
	// }

	const winningPath = useSelector(selectWinningPath);
	const positionOnWinningPath = (winningPath || []).indexOf(state.index);
	let squareStyles: React.CSSProperties = {};
	if (positionOnWinningPath > -1 && winningPath) {
		// is on path;

		const delay = (5000 / winningPath.length) * positionOnWinningPath + 100 + "ms";
		squareStyles.animationDelay = delay;
		const animationStyles: React.CSSProperties = {
			animationName: "glow",
			animationDelay: delay,
			animationDuration: "0.4s",
			animationIterationCount: 1,
			animationFillMode: "forwards",
		};

		squareStyles = animationStyles;
		// butterflyStyles = { opacity: 1 };
		// butterflyStyles = { ...animationStyles, animationDirection: "reverse" };
	}

	return (
		<td
			className={cx(styles.square, styles[state.contents || ""], styles[state.def])}
			style={squareStyles}
			data-index={index}>
			{/* <button onClick={onClick}> */}
			{state.def === "" && <Flower index={index} state={state} />}
			{state.def === "caterpillar" && <Caterpillar state={state} />}
			{/* {(state === "start" || state === "end") && "*"} */}
			{/* <SquareContents></SquareContents> */}
			{/* {contents} */}
			{/* </button> */}
		</td>
	);
};

export default Square;
