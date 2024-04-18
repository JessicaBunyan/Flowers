type Props = { letter: string };

type TSquareDef = "caterpillar" | "start" | "end" | "wall" | "";

type TLetterDef =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";

type TFlowerType = "SMALL";

type TFlowerPartType = "stem" | "petal" | "connectedPetal";
type TSquareState = {
	index: number;
	def: TSquareDef;
	contents?: TFlowerPartType;
	isLocked?: boolean;
	distanceToWin?: number;
};

type TRenderedSquareState = TSquareState;

type TIdPortion = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type TTileId = `${TLetterDef}${TIdPortion}`;
type TBoardDef = TSquareDef[];
type TBoardState = TSquareState[];

type TRenderedBoardState = TRenderedSquareState[];

type TRackDef = TLetterDef[];

type TPlacedFlower = {
	// id: string;
	pos: number;
	type: TFlowerType;
};

type TFoundWord = {
	direction: "H" | "V";
	word: string;
	pos: XY;
};

type TGameValidity = {
	isValid: boolean;
	errors: TErrorInfo;
	validWords: TFoundWord[];
};

type TErrorInfo = {
	count: number;
	invalidWords: TFoundWord[];
	islands: XY[];
};

type TFeedbackIndicator = {
	position: XY;
	width: number;
	height: number;
	type: "ISLAND" | "INVALID_WORD" | "VALID_WORD";
};

type TGameDef = {
	boardDef: TBoardDef;
};

type TExtendedGameDef = TGameDef & {
	sourceWords: string[];
	bonusLetters: string[];
};

type XY = [number, number];

type TDragData = {
	id: number;
};
