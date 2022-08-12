import "./Css/WordForm.css";
import "./Css/Button.css";
function HintForm (props) {
	const onChange = (e) => {	
		return props.onHintSubmit(e.target.value);
	}
	return (
		<div className="wordForm">
			<input onChange={(e) => onChange(e)} value={props.hint} type="text" placeholder="Enter a Hint" />
		</div>
	)
}

export default HintForm;