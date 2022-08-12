import Button from "./Button"
import "./Css/LetterForm.css";
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function LettersForm(props) {
	const checkLetter = (letter) => {	
		if (props.word.includes(letter)) {
			props.onLetterSubmit(letter);
		} else {
			props.updateGuesses(props.guesses + 1);
		}	
	}
	return (
		<div className="letterForm">
			<form >
				{letters.map( letter => ( <Button key={letter} letter={letter} checkLetter={checkLetter} /> ))}
			</form>
		</div>
	);
}

export default LettersForm;