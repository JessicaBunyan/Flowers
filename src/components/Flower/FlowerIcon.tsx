import React, { ReactNode } from "react";
import styles from "./Flower.module.scss";
import cx from "classnames";

type Props = { state: TSquareState };

export default function FlowerIcon({ state }: Props) {
	let petals: ReactNode = state.contents === "stem" && (
		<div className={styles.petalGroup}>
			<div className={styles.above}>
				<div className={styles.squarePetal} />
				{/* <svg className={cx(styles.petal)} fill="#000000" version="1.1" id="Capa_1" viewBox="120 0 150 160">
								<path d="M198.04,154.794c9.192,0.168,49.374-17.856,65.703-57.792c16.185-39.593,7.813-78.664-18.699-87.273    c-14.687-4.769-31.86,0.818-47.004,13.477c-15.144-12.657-32.318-18.244-47.004-13.477c-26.513,8.609-34.884,47.682-18.698,87.273    C148.664,136.937,188.848,154.962,198.04,154.794z" />
							</svg> */}
			</div>
			<div className={styles.right}>
				<div className={styles.squarePetal} />
				{/* <svg className={cx(styles.petal)} fill="#000000" version="1.1" id="Capa_1" viewBox="120 0 150 160">
								<path d="M198.04,154.794c9.192,0.168,49.374-17.856,65.703-57.792c16.185-39.593,7.813-78.664-18.699-87.273    c-14.687-4.769-31.86,0.818-47.004,13.477c-15.144-12.657-32.318-18.244-47.004-13.477c-26.513,8.609-34.884,47.682-18.698,87.273    C148.664,136.937,188.848,154.962,198.04,154.794z" />
							</svg> */}
			</div>
			<div className={styles.below}>
				<div className={styles.squarePetal} />
				{/* <svg className={cx(styles.petal)} fill="#000000" version="1.1" id="Capa_1" viewBox="120 0 150 160">
								<path d="M198.04,154.794c9.192,0.168,49.374-17.856,65.703-57.792c16.185-39.593,7.813-78.664-18.699-87.273    c-14.687-4.769-31.86,0.818-47.004,13.477c-15.144-12.657-32.318-18.244-47.004-13.477c-26.513,8.609-34.884,47.682-18.698,87.273    C148.664,136.937,188.848,154.962,198.04,154.794z" />
							</svg> */}
			</div>
			<div className={styles.left}>
				<div className={styles.squarePetal} />
				{/* <svg className={cx(styles.petal)} fill="#000000" version="1.1" id="Capa_1" viewBox="120 0 150 160">
								<path d="M198.04,154.794c9.192,0.168,49.374-17.856,65.703-57.792c16.185-39.593,7.813-78.664-18.699-87.273    c-14.687-4.769-31.86,0.818-47.004,13.477c-15.144-12.657-32.318-18.244-47.004-13.477c-26.513,8.609-34.884,47.682-18.698,87.273    C148.664,136.937,188.848,154.962,198.04,154.794z" />
							</svg> */}
			</div>
		</div>
	);

	petals = null;

	return (
		<div
			className={cx(styles.flower, { [styles.grown]: state.contents === "stem", [styles.isLocked]: state?.isLocked })}>
			<div className={cx(styles.budGroup)}>
				<svg
					className={cx(styles.bud, styles.middle1)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 170 212.5"
					x="0px"
					y="0px">
					<path
						className="cls-1"
						d="m85,165c27.58,0,49.93-25.46,49.93-56.87,0-.49,0-.98-.02-1.46-.81-47.26-41.13-93.22-49.82-101.67-8.49,8.2-47.04,57.02-49.86,98.41,0,.15-.02.3-.04.45l-.12,2.7c0,.52-.02,1.05-.02,1.57,0,31.41,22.36,56.87,49.93,56.87Z"
					/>
				</svg>
				<svg
					className={cx(styles.bud, styles.middle2)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 170 212.5"
					x="0px"
					y="0px">
					<path
						className="cls-1"
						d="m85,165c27.58,0,49.93-25.46,49.93-56.87,0-.49,0-.98-.02-1.46-.81-47.26-41.13-93.22-49.82-101.67-8.49,8.2-47.04,57.02-49.86,98.41,0,.15-.02.3-.04.45l-.12,2.7c0,.52-.02,1.05-.02,1.57,0,31.41,22.36,56.87,49.93,56.87Z"
					/>
				</svg>
				{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				x="0px" 
				y="0px"
				viewBox="0 0 100 125"
				enable-background="new 0 0 100 100">
				<path d="M84.4,60.6C84.4,40,63.3,18.3,50,5C36.7,18.3,15.6,40,15.6,60.6C15.6,79.6,31,95,50,95C69,95,84.4,79.6,84.4,60.6z M50,85  c-13.5,0-24.4-11-24.4-24.4c0-13.7,13.7-30.1,24.4-41.3c10.7,11.2,24.4,27.6,24.4,41.3C74.4,74,63.5,85,50,85z" />
			</svg> */}
				<svg
					className={cx(styles.bud, styles.left)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 170 212.5"
					x="0px"
					y="0px">
					<path
						className="cls-1"
						d="m85,165c27.58,0,49.93-25.46,49.93-56.87,0-.49,0-.98-.02-1.46-.81-47.26-41.13-93.22-49.82-101.67-8.49,8.2-47.04,57.02-49.86,98.41,0,.15-.02.3-.04.45l-.12,2.7c0,.52-.02,1.05-.02,1.57,0,31.41,22.36,56.87,49.93,56.87Z"
					/>
				</svg>
				<svg
					className={cx(styles.bud, styles.right)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 170 212.5"
					x="0px"
					y="0px">
					<path
						className="cls-1"
						d="m85,165c27.58,0,49.93-25.46,49.93-56.87,0-.49,0-.98-.02-1.46-.81-47.26-41.13-93.22-49.82-101.67-8.49,8.2-47.04,57.02-49.86,98.41,0,.15-.02.3-.04.45l-.12,2.7c0,.52-.02,1.05-.02,1.57,0,31.41,22.36,56.87,49.93,56.87Z"
					/>
				</svg>
				{petals}
			</div>
		</div>
	);
}
