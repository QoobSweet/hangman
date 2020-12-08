import React, { useState } from 'react';
import GalloDisplay from './galloDisplay.js';
import LetterSelector from './letterSelector.js';
import PhraseDisplay from './phraseDisplay.js';

const Controller = () => {
    const rootName = 'Controller';

    const [failCount, setFailCount] = useState(0);
    const [acceptedLetters, setAcceptedLetters] = useState(null);
    
    //Create another state variable declaration, within Controller, that will notify 
    const [isGameOver, setIsGameOver] = useState(false);
    
    const acceptLetter = (letter) => {
        let newArray = [];
        if(acceptedLetters){
            for(let i = 0; i < acceptedLetters.length; i++){
                newArray.push(acceptedLetters[i])
            }
        }
        
        newArray.push(letter)
        console.log('letter: ' + letter + ' was selected')
        console.log(['setting acceptedLetters to: ', newArray])
        setAcceptedLetters(newArray)


        
    }
    

    return ( 
        <div className = { rootName } >
            <GalloDisplay
                /* 
                declare props to be passed down here in html syntax  
                '{}' allow for passing javascript variables 
                */
                failCount = {failCount}
                isGameOver = {isGameOver}
                setIsGameOver = {setIsGameOver}
            />
            
            <PhraseDisplay 
                acceptedLetters = {acceptedLetters}
                setFailCount = {setFailCount}
                isGameOver = {isGameOver}
                setIsGameOver = {setIsGameOver}
            />
            
            <LetterSelector
                letterAccept = {acceptLetter}
                isGameOver = {isGameOver}
            />
        </div>
    )
}

export default Controller;