import "./Css/Display.css";
import Hint from "./Hint";
import Hangman from "./Hangman";
import WordDisplay from "./WordDisplay";
import WinModal from "./WinModal";
import LostModal from "./LostModal";
function Display (props){
	return (
		
		<div className="displayContainer">
			<div className="ripple-background">
				<div className="circle xxlarge shade1"></div>
				<div className="circle xlarge shade2"></div>
				<div className="circle large shade3"></div>
				<div className="circle mediun shade4"></div>
				<div className="circle small shade5"></div>
			</div>
			{props.gameWon ? <WinModal word={props.word} /> : null}
			{props.gameOver ? <LostModal word={props.word} /> : null}
			<Hint hint={props.hint}/>
			<Hangman guesses={props.guesses}/>
			<WordDisplay word={props.hiddenWord}/>
		</div>
	)
}

export default Display;