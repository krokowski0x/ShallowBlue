import React, { Component } from "react";
import Chess from "chess.js";

import WelcomeModal from "./WelcomeModal";
import GameOverModal from "./GameOverModal";
import Chessboard from "./Chessboard";
import MovesHistory from "./MovesHistory";

// Big chess object that is main state container
const chess = new Chess();

// Basic array storing numbers 1 to 8, for square naming
const helperArray = Array.from({ length: 8 }, (v, k) => k + 1);

export default class App extends Component {
	state = {
		chess,
		// Minimax with depth 3 as default AI diificulty
		difficulty: "3",
		// Most recent AI move information
		info: { time: 0, positions: 0 }
	};


	render() {
		/* eslint no-shadow: "off" */
		const { chess, difficulty, info } = this.state;
		// While game still isn't over
		if (!chess.game_over())
			return (
				<div className="App">
					<WelcomeModal
						// Pick difficulty and start the game
						difficulty={difficulty}
						onOptionChange={difficulty => this.setState({ difficulty })}
					/>
					<h1>ShallowBlue.js</h1>
					<div className="rows">
						{helperArray.map(i => <p key={i}>{9 - i}</p>)}
					</div>
					<Chessboard
						chess={chess}
						// After move, propagate chess and move info up to App
						onMove={(chess, info) => this.setState({ chess, info })}
						difficulty={parseInt(difficulty, 10)}
					/>
					<MovesHistory
						chess={chess}
						info={info}
						// Refresh chess object after undo
						onUndo={chess => this.setState({ chess })}
					/>
					<div className="cols">
						{helperArray.map(i => <p key={i}>{String.fromCharCode(i + 96)}</p>)}
					</div>
				</div>
			);
		return <GameOverModal chess={chess} />;
	}
}
