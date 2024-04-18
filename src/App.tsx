import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Game from "./components/Game";
import { DndProvider } from "react-dnd";

function App() {
	return (
		<>
			<DndProvider backend={HTML5Backend}>
				<Game />
			</DndProvider>
		</>
	);
}

export default App;
