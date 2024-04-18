import cx from "classnames";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTile } from "../../activeTileSlice";
import { selectActiveTile } from "../../selectors";
import styles from "./Tile.module.scss";
import { useDrag } from "react-dnd";
import { DragTypes } from "../../constants";

type Props = { contents: TSquareState };

const Tile = ({ contents }: Props) => {
	const dispatch = useDispatch();
	const activeTile = useSelector(selectActiveTile);

	const onClick = useCallback(() => {
		// dispatch(clearErrors());
		// dispatch(setActiveTile(id));
		// dispatch(clearErrors());
	}, [dispatch]);

	// const [{ isDragging }, dragRef] = useDrag(() => ({
	// 	type: DragTypes.TILE,
	// 	item: { id },
	// 	collect: (monitor) => ({
	// 		isDragging: !!monitor.isDragging(),
	// 	}),
	// }));

	return (
		<button className={cx(styles.tile)} onClick={onClick}>
			{/* {letter} */}
		</button>
	);
};

export default Tile;
