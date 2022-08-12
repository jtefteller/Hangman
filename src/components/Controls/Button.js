import {useState} from 'react';
import "./Css/Button.css";
function Button(props){
    const [clicked, setClicked] = useState("secondaryBtn");
    const [disabled, setDisabled] = useState(false);
    const onClick = (e) => {
        setDisabled(true);
        setClicked("secondaryBtnClicked");
        props.checkLetter(e.target.value.toUpperCase());
    }
    return (
        <button onClick={(e) => onClick(e)} value={props.letter} className={clicked} disabled={disabled}>
            {props.letter}
        </button>
    );
}
export default Button;