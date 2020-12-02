import React, { useState, useEffect } from 'react';
import './phraseDisplay.css';

const PhraseDisplay = (props) => {
    const rootName = 'PhraseDisplay';
    const staticPhrase = 'hanging with hangman';

    const [displayActual, setDisplayActual] = useState([]);

    useEffect(() => {
        //called every time props.acceptedLetters is updated
        console.log('testing', props.acceptedLetters)
        const generateDisplayOfPhrase = (phrase) => {

            const newLetterArr = [];

            for (let i = 0; i < phrase.length; i++) {
                const letter = phrase[i];

                if (letter !== " ") {
                    //Display Letter or blank space
                    if (props.acceptedLetters) {
                        if (props.acceptedLetters.includes(letter)) {
                            newLetterArr.push(generateLetterDisplay(letter));
                        }
                    }
                } else {
                    //insert space element
                    newLetterArr.push( <
                        div className = { rootName + '-emptyPhraseSpace' }
                        />
                    )
                }

            }

            return newLetterArr;
        }


        setDisplayActual(generateDisplayOfPhrase(staticPhrase))
    }, [props.acceptedLetters])

    const generateLetterDisplay = (letter) => {
        return ( <
            div className = { rootName + '-guessedLetterDisp' } >
            <
            label className = { rootName + '-guessedLetterDisplay-letter' } > { letter } <
            /label>                 <
            /div>
        )
    }


    return ( <
        div className = { rootName } > { displayActual } <
        /div>
    )
}

export default PhraseDisplay;