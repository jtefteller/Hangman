import "./Css/WordDisplay.css";
function WordDisplay(props){
	return (
		<div className="wordDisplayContainer">
			{props.word}	
		</div>
	);
}

export default WordDisplay;