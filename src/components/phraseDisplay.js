import React, { useState, useEffect } from 'react';
import './phraseDisplay.css';

const PhraseDisplay = (props) => {
    const rootName = 'PhraseDisplay';
    const staticPhrase = 'hanging with hangman';

    const [displayActual, setDisplayActual] = useState([]);


    useEffect(() => {
        
        //called every time props.acceptedLetters is updated
        console.log('testing', props.acceptedLetters)

        //Create a function, getFailCount, that accepts an acceptedLetters array. 
            //Iterate over the accepted letters, test them against our staticPhrase and if the element within the 
                //current iteration is not included:
                    //  we are going to increment failCount by 1. 
        const getFailCount = (acceptedLetters) => {
            let failCount = 0;
            //itterate over all the letters selected
            for(let i = 0; i < acceptedLetters.length; i++) {
                console.log('Current letter is', acceptedLetters[i]);
                console.log('The static phrase is', staticPhrase);


                if(!staticPhrase.toUpperCase().includes(acceptedLetters[i])) {
                    failCount++
                }
            }
            return failCount;
        }
    
        const generateLetterDisplay = (letter, id) => {
            //generate the HTML Model with inputed data
            return ( 
                <div className = { rootName + '-guessedLetterDisp' } key={'letter_' + id}>
                    <label className = { rootName + '-guessedLetterDisplay-letter' } > 
                        { letter }
                    </label>                 
                </div>
            )
        }

        const generateDisplayOfPhrase = (phrase) => {
            const newLetterArr = [];

            //itterate over length of phrase
            for (let i = 0; i < phrase.length; i++) {
                const char = phrase[i].toUpperCase();
            
                //if letter is not a space
                if (char !== " ")  {
                    //Display Letter or blank space
                    if (props.acceptedLetters && props.acceptedLetters.includes(char)) {
                        //generate letter with underline
                        newLetterArr.push(generateLetterDisplay(char, i));
                    } else {
                        //just generate the underline
                        newLetterArr.push(generateLetterDisplay(' ', i));
                    }
                    
                //else (letter is a space)
                } else {
                    //insert space element
                    newLetterArr.push( 
                        <div className = { rootName + '-emptyPhraseSpace' } key={'space_' + i}/>
                    )
                }
            }

            return newLetterArr;
        }
        
        if(props.isGameOver === false && props.acceptedLetters) {

            let  result = 0; 
            for(let i = 0; i< staticPhrase.length; i++) {
                console.log('This is ', props.acceptedLetters)
                    if(props.acceptedLetters.includes(staticPhrase[i].toUpperCase()) || staticPhrase[i] === " " ){
                        result++;
                    }
            }
            
            
            if(result === staticPhrase.length) {
                props.setIsGameOver(true);
                
            } else {

                console.log(result, staticPhrase.length)   
                
                if(props.acceptedLetters) {
                    props.setFailCount(getFailCount(props.acceptedLetters))
                } 

                console.log('setting Display Actual')
            }

        }
        setDisplayActual(generateDisplayOfPhrase(staticPhrase))
    }, [props, props.acceptedLetters])


    return ( 
        <div className = { rootName } >
            { displayActual } 
        </div>
    )
}

export default PhraseDisplay;