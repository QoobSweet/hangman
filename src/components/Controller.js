import React, { useState } from 'react';
import GalloDisplay from './galloDisplay.js';
import LetterSelector from './letterSelector.js';
import PhraseDisplay from './phraseDisplay.js';

const Controller = () => {
    const rootName = 'Controller';

    const [failCount, setFailCount] = useState(0);
    const [acceptedLetters, setAcceptedLetters] = useState([]);
    
    const acceptLetter = (letter) => {
        let newArray = acceptedLetters
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

            />
            
            <PhraseDisplay 
                acceptedLetters = {acceptedLetters}
            />
            
            <LetterSelector
                letterAccept = {acceptLetter}
            />
        </div>
    )
}

export default Controller;