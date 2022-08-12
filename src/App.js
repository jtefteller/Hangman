import './App.css';
import { useState } from 'react';
import SideNav from './components/Controls/SideNav';
import Display from './components/GameDisplay/Display';

/* 
  color scheme
  #2C3639 - background
  #3F4E4F - light background  
  #A27B5C - primary
  #DCD7C9 - accent 
*/

/*
  Things I want Logan to do:
    -Fix bugs:

      -Easiest difficulty:
        - change the color of the hangman to the accent color: #DCD7C9
        - change the width of the hangman and gallows to match the width of the canvas trim 
        - center the hangman and gallows on the canvas

      -Medium difficulty:
        - Don't allow the player to play the game until a word has been typed into the word input

      -Hardest difficulty:
        - Reset all of the state back to the default when the player clicks 
            the reset button on the win or lose modal
          a) Without reloading the page

    -Add features:
      -Easiest difficulty:
        - change the default font of the entire application  
        - change the color of the selected word on the win and lose model to the primary color: #A27B5C

      -Medium difficulty:

        - add a timer to the play screen 

        - display time of win on the win modal
          a) something like you won in X time

        - put the ripple animation into a component
          a) put it's css into a seperate file
          b) it should still work afterwards

        - put the fireworks animation into a component
          a) put it's css into a seperate file
          b) it should still work afterwards

        - put the cloud animation into a component
          a) put it's css into a seperate file
          b) it should still work afterwards

      -Hardest difficulty:
        - add sound effects to the game
          a) add button clicks sounds to the A-Z buttons
          b) add a win sounds
          c) add a lose sounds
          d) add background music to the game

        - add settings to turn on/off the sound effects

        - add a computer ai to the game - it will generate a word/hint for the player to guess

        - add a difficulty setting to the game - easy, medium, hard
*/

function App() {

  const [hint, setHint] = useState('');
  const [word, setWord] = useState('');
  const [hiddenWord, setHiddenWord] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const onHintSubmit = (hint) => setHint(hint);
  const onSetHiddenWord = (hiddenWord) => setHiddenWord(hiddenWord);
  const getIndices = (word, letter) => { 
      const indices = [];
      for(let i in word){
        if(word[i] === letter){
          indices.push(i);
        }
      }   
      return indices;
  }

  const onWordSubmit = (word) => {
    setWord(word);
    const hiddenWord = word.split("")
    for(let i = 0; i < hiddenWord.length; i++){
      hiddenWord[i] = '___ ';
    }
    onSetHiddenWord(hiddenWord);
  }

  const onLetterSubmit = (letter) => {
    const index = word.indexOf(letter)
    if(index > -1){
      const indices = getIndices(word, letter);
      const newHiddenWord = [...hiddenWord];

      for(let i in indices){
        newHiddenWord[indices[i]] = letter;
      }
      onSetHiddenWord(newHiddenWord);
      const check = newHiddenWord.join('');
      if(check === word){
        setGameWon(true);
      }
    }
  }

  const updateGuesses = (guess) => {
    setGuesses(guess);
    if(guess > 5){
      setGameOver(true);
    }
  }

  return (
    <div className="mainContainer">
      <Display 
        hint={hint} 
        word={word}
        hiddenWord={hiddenWord}
        guesses={guesses}
        gameWon={gameWon}
        gameOver={gameOver}
      />
      <SideNav 
        word={word} 
        guesses={guesses}
        onHintSubmit={onHintSubmit} 
        onWordSubmit={onWordSubmit} 
        onLetterSubmit={onLetterSubmit}
        updateGuesses={updateGuesses}
      />
    </div>
  );
}

export default App;
