import "./Css/SideNav.css";
import HintForm from "./HintForm";
import WordForm from "./WordForm";
import LettersForm from "./LettersForm";
function SideNav (props){
	return (
		<div className="controls">
			<div className="top">
				<HintForm onHintSubmit={props.onHintSubmit}/>
				<WordForm onWordSubmit={props.onWordSubmit} />
			</div>
			<div className="bottom">
				<LettersForm 
					word={props.word} 
					guesses={props.guesses}
					onLetterSubmit={props.onLetterSubmit} 
					updateGuesses={props.updateGuesses}
				/>
			</div>
		</div>
	)

}

export default SideNav;