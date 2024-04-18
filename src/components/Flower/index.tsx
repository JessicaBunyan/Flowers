import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTile } from "../../gameSlice";
import FlowerIcon from "./FlowerIcon";
import { selectWinningPath } from "../../selectors";

type Props = { index: number; state: TSquareState };

const Flower = ({ index, state }: Props) => {
	const dispatch = useDispatch();
	const handleTilePlacement = useCallback(() => {
		console.log("handle tile palcement");
		dispatch(toggleTile({ pos: index, type: "SMALL" }));
	}, [dispatch, index]);

	const onClick = useCallback(() => {
		handleTilePlacement();
	}, [handleTilePlacement]);

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
			animationDuration: "0.2s",
			animationIterationCount: 1,
			animationFillMode: "forwards",
		};

		squareStyles = animationStyles;
		// butterflyStyles = { opacity: 1 };
		// butterflyStyles = { ...animationStyles, animationDirection: "reverse" };
	}

	return (
		<button onClick={onClick}>
			<FlowerIcon state={state} />
		</button>
	);
};

export default Flower;
