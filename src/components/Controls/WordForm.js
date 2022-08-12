import "./Css/WordForm.css";
import "./Css/Button.css";
function WordForm (props) {
	const onChange = (e) => {	
		return props.onWordSubmit(e.target.value.toUpperCase());
	}
  return (
	<div className="wordForm">
	  <input onChange={(e) => onChange(e)} value={props.word} type="password" placeholder="Enter a Word" />
	</div>
  )
}

export default WordForm;