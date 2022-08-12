import "./Css/Hint.css";
function Hint(props){
	return (
		<div className="hint" >
			{props.hint.length ? props.hint : "Hint"}	
		</div>
	)
}

export default Hint;