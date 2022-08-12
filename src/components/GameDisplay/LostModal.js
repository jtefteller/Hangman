import "./Css/Modal.css";
import "../Controls/Css/Button.css";
function LostModal(props){
	return (
		<div className="modal is-active">
			<div className="modalContent">
					<h1 className="title" style={{zIndex:2}}>You Lost!</h1>
					<p className="message">Word was {props.word}</p>
					<button className="primaryBtn" style={{zIndex:2}} onClick={(e) => window.location.reload()}>Play Again</button>
			</div>
			<div id="background-wrap">
					<div class="x1">
							<div class="cloud"></div>
					</div>

					<div class="x2">
							<div class="cloud"></div>
					</div>

					<div class="x3">
							<div class="cloud"></div>
					</div>

					<div class="x4">
							<div class="cloud"></div>
					</div>

					<div class="x5">
							<div class="cloud"></div>
					</div>
			</div>
		</div>
	);
}

export default LostModal;