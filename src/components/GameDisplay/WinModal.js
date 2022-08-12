import "./Css/Modal.css";
import "../Controls/Css/Button.css";
function WinModal(props){
	return (
		<div className="modal is-active">
			<div className="modalContent">
					<h1 className="title">You Win!</h1>
					<p className="message">Word was {props.word}</p>
					<button className="primaryBtn" style={{zIndex: 2}} onClick={(e) => window.location.reload()}>Play Again</button>
			</div>
			<div class="firework"></div>
			<div class="firework"></div>
			<div class="firework"></div>
		</div>
	);
}

export default WinModal;