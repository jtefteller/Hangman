import React from 'react'
import Canvas from './Canvas'

function Hangman(props){

	const drawGallows = (ctx) => { 
		ctx.moveTo(120,305); 
		ctx.lineTo(280,305); 
		ctx.moveTo(260,305); 
		ctx.lineTo(260,70); 
		ctx.lineTo(180,70); 
		ctx.lineTo(180,96); 
		ctx.stroke(); 
	}
	const drawHead = (ctx) => { 
		ctx.beginPath(); 
		ctx.arc(180,120,23,0,Math.PI*2,false); 
		ctx.closePath(); 
		ctx.stroke(); 
	}
	const drawBody = (ctx) => { 
		ctx.moveTo(180,143); 
		ctx.lineTo(180,248); 
		ctx.stroke(); 
	}
	const drawArm1 = (ctx) => { 
		ctx.moveTo(180,175); 
		ctx.lineTo(142,167); 
		ctx.stroke(); 
	} 
	const drawArm2 = (ctx) => { 
		ctx.moveTo(180,175); 
		ctx.lineTo(218,167); 
		ctx.stroke(); 
	}
	const drawLeg1 = (ctx) => { 
		ctx.moveTo(180,245); 
		ctx.lineTo(145,270); 
		ctx.stroke(); 
	} 
	 
	const drawLeg2 = (ctx) => { 
		ctx.moveTo(180,245); 
		ctx.lineTo(215,270); 
		ctx.stroke(); 
	}
	
	let drawFunc;
	// eslint-disable-next-line
	{switch(props.guesses){
		case 0:
			drawFunc = drawGallows;
			break;
		case 1:
			drawFunc = drawHead;
			break;
		case 2:
			drawFunc = drawBody;
			break;
		case 3:
			drawFunc = drawArm1;
			break;
		case 4:
			drawFunc = drawArm2;
			break;
		case 5:
			drawFunc = drawLeg1;
			break;
		case 6:
			drawFunc = drawLeg2;
			break;
		default:
			drawFunc = drawGallows;
			break;
	}} 
	return <Canvas draw={drawFunc} />
}

export default Hangman;